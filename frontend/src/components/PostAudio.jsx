import React, {useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import ValidateHeader from "../components/ValidateHeader"
import Footer from "../components/Footer"

const PostAudio = () => {

    const [audioFile, setAudioFile] = useState('');
    const [getFile, setGetFile] = useState("");


    const onFileChange = (e) =>{
        setGetFile(e.target.files)
        setAudioFile(e.target.files)
    }

    const navigate = useNavigate();

    const onSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", audioFile);
        axios.post("http://localhost:8000/addAudio", formData, {
        }).then(res => navigate("/"))
    }

        return(
            <div>
                <ValidateHeader/>
                <div id = "main">
            <article className = 'post featured'>
		<section className = 'major'>


            <form onSubmit={onSubmit} encttype = "multipart/form-data">
                <div className = "field flex column">
                <label htmlFor = 'file' className = "button large">Add Audio</label>
                    <input id = "file" name = 'file' className = "hidden" type="file" onChange={onFileChange} />

                    <span>{getFile[0] ? getFile[0].name : "No File Chosen"}</span>

                </div>
                <div>
                    <button type="submit" className = "button large">Upload</button>
                </div>
            </form>
        </section>
            </article>
            </div>
            <Footer />
            </div>
        )
        
}

export default PostAudio