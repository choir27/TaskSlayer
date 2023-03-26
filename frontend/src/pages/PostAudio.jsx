import React, { Component, useContext } from "react";
import axios from "axios";
import UserHeader from "../components/UserHeader"
import Footer from "../components/Footer";
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"
import PostPlaylist from "../components/PostPlaylist"

class FilesUploadComponent extends Component {
  constructor(props) {
      super(props);
      this.onFileChange = this.onFileChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          audioFile: '',
          user: ''
      }
  }
  onFileChange(e) {
      this.setState({ audioFile: e.target.files[0] })
  }
  onSubmit(e) {
      e.preventDefault()

      if(this.state.audioFile && (this.state.audioFile.name.includes("mp3") || this.state.audioFile.name.includes("ogg"))){
    

      const formData = new FormData()
      formData.append('file', this.state.audioFile)
      formData.append("user", this.state.user)
      axios.post("http://localhost:8000/addAudio", formData, {
      }).then(res => {
        console.log(res)
      })
      window.location.reload();
    }else if(!this.state.audioFile){
      toast.error("Please Upload a File")
      return;
    }else{
      toast.error("Incorrect File Uploaded. Please Upload An Audio File")
      return;
    }
  }

  getUser(){

    this.props.userContext.then(data=>{
      const onUserChange = () => this.setState({user: data._id})
      onUserChange()
    }
    )
  }


render(){
  return (
    <div>
      <UserHeader />
      <div id="main">
        <article className="post featured">
          <section className="major">
            <form onSubmit={this.onSubmit} encttype="multipart/form-data">
              <div className="field flex column">
                <label htmlFor="file" className="button large">
                  Add Audio
                </label>
                <input
                  id="file"
                  name="file"
                  className="hidden"
                  type="file"
                  onChange={this.onFileChange}
                  onClick = {() => this.getUser()}
                />
       
                <input
                id = "user"
                type = "text"
                name = "user"
                className = "hidden"
                disabled
                value = {this.state.user}
                readOnly = {true}
                />

                <span>{this.state.audioFile ? this.state.audioFile.name : "No File Chosen"}</span>
              </div>
              <div>

          
                <button
                  type="submit"
                  className="button large"
                  onClick = {()=>{

                  }}
                >
                  Upload
                </button>
              </div>
            </form>


            <PostPlaylist/>

          </section>
        </article>
      </div>
      <Footer />
      <div id="copyright">
&copy; choir Design: HTML5 UP
</div>
    </div>
  );
                }
}

const GetUser = () =>{
  const userContext = useContext(MyContext)

  const users = async() =>{
    let user = await userContext;
    return user
  }

  return <FilesUploadComponent userContext = {users()}/>

}

export default GetUser

