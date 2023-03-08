import React, { Component } from "react";
import axios from "axios";
import UserHeader from "../components/UserHeader"
import Footer from "./Footer";
import {useContext} from "react"
import {MyContext} from "../middleware/Context"

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
      const formData = new FormData()
      formData.append('file', this.state.audioFile)
      formData.append("user", this.state.user)
      axios.post("http://localhost:8000/addAudio", formData, {
      }).then(res => {
          console.log(res)
      })
  }

  async getUser(){
   let res = await this.props.userContext
   const onUserChange = () => this.setState({user: res[0]._id})
   onUserChange()
   console.log(this.state.user)
  return res
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
                >
                  Upload
                </button>
              </div>
            </form>
          </section>
        </article>
      </div>
      <Footer />
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
