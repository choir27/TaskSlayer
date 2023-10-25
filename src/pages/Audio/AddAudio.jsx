import React, {Component, useContext} from "react"
import {useNavigate} from "react-router"
import NavPanel from "../../components/NavPanel"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {toast} from "react-toastify"
import axios from "axios"
import {UserContext} from "../../middleware/Context"

class AddAudio extends Component{
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            audioFile: "",
            loading: false
        };
    };

    onFileChange(e) {
        this.setState({ audioFile: e.target.files[0]});
    };

    async onSubmit(e) {
        try{
            e.preventDefault();
  
            if(this.state.audioFile && 
              (this.state.audioFile.name.includes("mp3") 
              || this.state.audioFile.name.includes("ogg"))
              ){
      
              this.setState({loading: true});

              const formData = new FormData();
              formData.append("file", this.state.audioFile);
              formData.append("user", this.props?.userContext?.email);
              formData.append("userID", this.props?.userContext?.$id);

              axios.post("https://echoverse-backend.onrender.com/addAudio", formData, {})
                .then(res=>{
                    console.log(res);
                    if(res){
                        this.setState({loading: false});
                        this.props.navigate("/");
                        window.location.reload();
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
              <NavPanel/>
              <Header setToggleNav = {()=>""} setToggleClose = {()=>""}/>

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

                                    </div>

                                    <div className="flex justifyContent">
                                        <button type = "submit" className = "button large">Upload Audio</button>
                                    </div>
                                </form>
                            </section>
                        }

                        <h1>Add Audio</h1>
                    </section>

              <Footer/>
        </main>
        )
    }
}

export default function PostAudio(){
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    return <AddAudio userContext = {userContext} navigate = {navigate}/>
}