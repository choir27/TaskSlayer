import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserHeader from "../components/UserHeader"
import Footer from "./Footer";
import {useContext} from "react"
import {MyContext} from "../App"

export default class FilesUploadComponent extends Component {
  constructor(props) {
      super(props);
      this.onFileChange = this.onFileChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          audioFile: ''
      }
  }
  onFileChange(e) {
      this.setState({ audioFile: e.target.files[0] })
  }
  onSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('file', this.state.audioFile)
      axios.post("http://localhost:8000/addAudio", formData, {
      }).then(res => {
          console.log(res)
      })
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
                />
                <input
                
                />
                <input
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