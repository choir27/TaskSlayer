"use client"
import React, {Component, useContext} from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {toast} from "react-toastify"
import axios from "axios"
import {UserContext} from "../../middleware/Context"
import GenreSelect from "../../components/GenreSelect"
import "../../css/global.css"
import {useRouter} from "next/navigation"
import withAuth from "../../middleware/Private"
import {join} from "path"

class AddAudio extends Component{
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onArtistChange = this.onArtistChange.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            audioFile: "",
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
        console.log(this.state.genre)
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

              console.log(this.props?.userContext?.email)
                console.log(this.props?.userContext?.$id)
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
        <main className = "column flex">
              <Header/>

                    <section className = "main" id = "add">
                        {this.state.loading?
                        (
                            <section className = "major">
                                <h1>Loading...</h1>
                            </section>
                        ):
                            <section>
                                <form onSubmit={this.onSubmit} action = "/api/addAudio" method = "POST" encttype="multipart/form-data">
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
                                            {this.GenreSelect}

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
        </main>
        )
    }
}

const PostAudio = () =>{
    const userContext = useContext(UserContext);
    const {push} = useRouter();

    return <AddAudio userContext = {userContext} push = {push}/>
}

export default PostAudio