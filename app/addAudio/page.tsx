"use client"
import React, {Component, useContext, useEffect} from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import GenreSelect from "../../components/GenreSelect"
import {toast} from "react-toastify"
import axios from "axios"
import {UserContext} from "../../middleware/Context"
import "../../css/global.css"
import "../../css/mediaQuery.css"
import {useRouter} from "next/navigation"
import {useStore} from "../../middleware/Zustand"
import SearchResultsDisplay from "../search/page"
import {State, Action} from "../../middleware/Type"
import {User} from "../../middleware/Interface"

interface StateComponent{
    audioFile: File,
    artist: string,
    genre: string,
    loading: boolean
}

interface PropsComponent{
    searchDisplay: boolean,
    userContext: User,
    push: (e)=>void
}

class AddAudio extends Component<PropsComponent, StateComponent>{
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onArtistChange = this.onArtistChange.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            audioFile: {} as File,
            artist: "",
            genre: "",
            loading: false
        };
    };

    onFileChange(e) {
        this.setState({ audioFile: e.target.files[0]});
    };

    onArtistChange(e){
        this.setState({ artist: e.target.value})
    };

    onGenreChange(e){
        this.setState({ genre: e.target.value})
    };

    async onSubmit(e) {
        try{
            e.preventDefault();

            this.setState({loading: true});

  
            if(this.state.audioFile && 
              (this.state.audioFile.name.includes("mp3") 
              || this.state.audioFile.name.includes("ogg"))
              ){

                // const formData = {
                //     "file" : this.state.audioFile,
                //     "user" : this.props.userContext.email,
                //     "userId": this.props.userContext.$id,
                //     "genre": this.state.genre,
                //     "artist": this.state.artist
                //  }
            //      console.log(formData   )


            const formData = new FormData();

              formData.append("file", this.state.audioFile);
              formData.append("user", this.props?.userContext?.email);
              formData.append("userID", this.props?.userContext?.$id);
              formData.append("genre", this.state.genre);
              formData.append("artist", this.state.artist);

            //   fetch("/items ", {
            //     method: "POST",
            //     body: formData
            //   })

              axios.post("https://echoverse-backend.onrender.com/addAudio", formData, {})
                .then(res=>{
                    console.log(res);
                    if(res){
                        this.setState({loading: false});
                        this.props.push("/");
                    }
                }).catch(err=>{
                    console.error(err);
                    this.setState({loading: false});
                })
    
                }else if(!this.state.audioFile){
                  toast.error("Please Upload a File");
                  return;
                }else{
                  toast.error("Incorrect File Uploaded. Please Upload An Audio File");
                  return;
          }
        }catch(err){
            console.error(err);
        }
    };

    render(){

        return(
        <>
        {this.props.searchDisplay
        ?
        <SearchResultsDisplay/>
        :
        <>
              <Header/>

                    <section className = "main" id = "add">
                        {this.state.loading?
                        (
                            <section className = "major">
                                <h1>Loading...</h1>
                            </section>
                        ):
                            <section>
                                <form onSubmit={this.onSubmit}>
                                    <div className="flex column alignItems">

                                        <h1>Add Audio</h1>

                                        <label htmlFor="file" className = "button large">Add Audio</label>

                                        <input 
                                        type="file"
                                        name ="file"
                                        className = "hidden"
                                        id = "file"
                                        onChange={this.onFileChange}
                                        />

                                        <span>{
                                            this.state.audioFile ? 
                                            this.state.audioFile.name : 
                                            "No File Chosen"
                                        }</span>

                                        <section className="flex justifyBetween inputs">

                                            <input
                                            type = "text"
                                            name = "artistName"
                                            onChange={this.onArtistChange}
                                            placeholder = "Add Artist of Song"
                                            />

                                            <GenreSelect onGenreChange = {(e)=>this.onGenreChange(e)}/>

                                        </section>
    
                                  

                                    </div>


                                    <div className="flex justifyContent">
                                        <button type = "submit" className = "button large">Upload Audio</button>
                                    </div>
                                </form>
                            </section>
                        }

                    </section>

              <Footer/>
        </>
        }
        </>
        )
    }
}

const PostAudio = () =>{
    const userContext = useContext(UserContext) as User;
    const {push} = useRouter();

    const searchDisplay = useStore((state:State)=>state.searchDisplay)
	const setSearchDisplay = useStore((state:Action)=>state.setSearchDisplay);

	useEffect(()=>{
		setSearchDisplay(false);
	},[])

    return <AddAudio searchDisplay = {searchDisplay} userContext = {userContext} push = {push}/>
}

export default PostAudio