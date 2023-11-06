import React, {Component} from "react"
import NavPanel from "../../components/NavPanel"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {toast} from "react-toastify"
import api from "../../api/api"
import { Permission, Role } from "appwrite"

export default class AddAudio extends Component{
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
        e.target.files["email"] = "richardchoi54@gmail.com"
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

              const random = Math.ceil(Math.random()*1000000)

              await api.uploadFile(random, this.state.audioFile , [Permission.read(Role.any())])
    
              this.setState({loading: false});

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