import React, { Component, 
                useContext } from "react"
import axios from "axios";
import UserHeader from "../components/UserHeader"
import Footer from "../components/Footer"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"
import PostPlaylist from "../components/PostPlaylist"
import {useNavigate} from "react-router-dom"
import NavPanel from "../components/NavPanel"

class FilesUploadComponent extends Component {
  constructor(props) {
      super(props);
      this.onFileChange = this.onFileChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          audioFile: "",
          user: "",
          loading: false
      };
  };
  onFileChange(e) {
      this.setState({ audioFile: e.target.files[0] });
  };
  onSubmit(e) {
      e.preventDefault();

      if(this.state.audioFile && 
        (this.state.audioFile.name.includes("mp3") 
        || this.state.audioFile.name.includes("ogg"))
        ){

        this.setState({loading: true});
    
        const formData = new FormData();
        formData.append('file', this.state.audioFile);
        formData.append("user", this.state.user);

        axios.post("https://illya-site-backend-production.up.railway.app/addAudio", formData, {})
          .then(res =>{
            if(res){
            this.setState({loading: false});
            this.props.navigate("/account");
            };
          }).catch(err=>{
            console.error(err);
            this.setState({loading: false});
          });


          }else if(!this.state.audioFile){
            toast.error("Please Upload a File");
            return;
          }else{
            toast.error("Incorrect File Uploaded. Please Upload An Audio File");
            return;
    }
  };

  getUser(){
    this.props.userContext.then(data=>{
      const onUserChange = () => {
        this.setState({user: data._id}
      )}
      onUserChange();
    });
  };

  render(){
    return (
      <div id = "wrapper">
        <NavPanel/>
        <UserHeader idName = "nav"/>
        <div id="main">
          <article className="post featured">

            {this.state.loading ? 
              (
                <section className = "major">
                    <h1>Loading...</h1> 
                </section>
              ):
                <section className="major">

                  <form onSubmit={this.onSubmit} 
                encttype="multipart/form-data"
              >
                <div className="field flex column">
                  <label htmlFor="file" 
                  className="button large"
                >
                  Add Audio
                  </label>

                  <input
                    id="file"
                    name="file"
                    className="hidden"
                    type="file"
                    onChange={this.onFileChange}
                    onClick = {() => {
                      this.getUser()
                    }}
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

                <span>{
                this.state.audioFile ? 
                this.state.audioFile.name : 
                "No File Chosen"
                }</span>
                </div>

                <div>

                  <button
                    type="submit"
                    className="button large"
                  >
                  Upload
                </button>
                </div>
                  </form>

                  <PostPlaylist/>

                </section>

            }
          </article>
        </div>
        <Footer />
        <div id="copyright">
          &copy; choir Design: HTML5 UP
        </div>
      </div>
    );
  };
}

const GetUser = () =>{
  const userContext = useContext(MyContext);
  const navigate = useNavigate();

  const users = async() =>{
    let user = await userContext;
    return user;
  }

  return <FilesUploadComponent 
          userContext = {users()}
          navigate = {navigate}
         />

}

export default GetUser
