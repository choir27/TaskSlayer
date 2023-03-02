import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserHeader from "../components/UserHeader"
import Footer from "./Footer";
import {useContext} from "react"
import {MyContext} from "../App"

export default function FilesUploadComponent() {
  const [audioFile, setAudioFile] = useState(null);
  const UserContext = useContext(MyContext)

  const onFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", audioFile);
    formData.append("user", UserContext)
    axios
      .post("http://localhost:8000/addAudio", formData, {})
      .then((res) => {
        console.log(res);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <UserHeader />
      <div id="main">
        <article className="post featured">
          <section className="major">
            <form onSubmit={onSubmit} encttype="multipart/form-data">
              <div className="field flex column">
                <label htmlFor="file" className="button large">
                  Add Audio
                </label>
                <input
                  id="file"
                  name="file"
                  className="hidden"
                  type="file"
                  onChange={onFileChange}
                />

                <span>{audioFile ? audioFile.name : "No File Chosen"}</span>
              </div>
              <div>
                <button
                  type="submit"
                  className="button large"
                  onClick={() => {
                    navigate("/");
                  }}
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