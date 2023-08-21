import React, {useState} from "react"
import NavPanel from "../../components/NavPanel"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

interface Audio{
    name: string | undefined,
    size: number | undefined,
    type: string | undefined,
    webkitRelativePath: string,
    lastModified: number,
}

export default function AddAudio(){

    const [loading, setLoading] = useState<boolean>(false);
    const [audioFile, setAudioFile] = useState<string>();

    async function handleSubmit(audio: Audio){
        try{
            const audioFile = audio
                        
        }catch(err){
            console.error(err);
        }

    }

    console.log(audioFile)

    return(
        <main className = "column flex">
              <NavPanel/>
              <Header setToggleNav = {(e:boolean)=>""} setToggleClose = {(e:boolean)=>""}/>

                    <section className = "main" id = "add">
                        {loading?
                        (
                            <section className = "major">
                                <h1>Loading...</h1>
                            </section>
                        ):
                            <section>
                                <form>
                                    <div className="flex column alignItems">
                                        <label htmlFor="file" className = "button large">Add Audio</label>

                                        <input 
                                        type="file"
                                        name ="file"
                                        className = "hidden"
                                        id = "file"
                                        onChange = {(e: React.ChangeEvent<HTMLInputElement>)=>{
                                            const file = e.target.value
                                            setAudioFile(file)
                                        }}
                                        />

                                        <span>
                                            {audioFile ? audioFile : "No File Chosen"}
                                        </span>

                                    </div>

                                    <div className="flex justifyContent">
                                        <button type = "submit" className = "button large" onClick = {(e:React.MouseEvent<HTMLButtonElement>)=>{
                                            e.preventDefault();
                                        }}>Upload Audio</button>
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