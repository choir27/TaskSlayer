import Assets from "./Assets"
import Button from "./Button";
import {useState, useEffect, useRef, useContext} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {MyContext} from "../middleware/Context"
import Post from "../components/Post"

const VoiceLinePlayer = () => {

  const [currentAudio, setCurrentAudio] = useState("");
  let [currentIndex, setCurrentIndex] = useState(0);
  let [audioPlayer] = useState({});
  const userContext = useContext(MyContext)
  const currentUser = useRef({})
  const [user, setUser] = useState({})
  const [audio, setAudio] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[])

  userContext.then(data=>{
    currentUser.current = data
  })

  useEffect(()=>{

    const getPost = async() =>{
       const postsFromServer = await getAudios()
       setAudio(postsFromServer)
    }

    getPost()
  },[])

  const getAudios = async() => {
    let res = await fetch("http://localhost:8000/audio")
    let data = await res.json();
    return data
  }

  const audioTracks  = []

  audio.forEach(ele=>{
    if(ele.user === user._id){
        audioTracks.push(ele.audio)
    }
})
  

  useEffect(() => { 
    try{

      audioPlayer.current = new Audio(audioTracks[currentIndex]);
    }catch(err){
      throw new Error(err);
    }
}, [currentIndex, audioPlayer]);


const goBackOne = () => currentIndex > 0 ? setCurrentIndex(currentIndex-1):setCurrentIndex(audioTracks.length-1);

const goForwardOne = () => currentIndex === audioTracks.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1);

  return (
<>

        <AudioPlayer
    autoPlay
    src={currentAudio}
  />


<div className = 'flex row justifyContent buttons'>

            <Button
            cname = 'button'
            size = 'large'
            text = <i className="fa-solid fa-backward-step"></i>
            onClick = {(e)=>{
              e.preventDefault();
              audioPlayer.current.pause();
              goBackOne();
              setCurrentAudio(audioTracks[currentIndex]);
            }}
            />

            <Button
            cname = 'button'
            size = 'large'
            text =  <i className="fa-solid fa-forward-step"></i>
             onClick = {(e)=>{
              e.preventDefault();
              audioPlayer.current.pause();
              goForwardOne();
              setCurrentAudio(audioTracks[currentIndex]);
            }}
            />

            </div>

    </>

  )
}

export default VoiceLinePlayer