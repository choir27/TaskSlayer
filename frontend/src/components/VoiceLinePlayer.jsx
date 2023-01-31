import Header from "./Header"
import Footer from "./Footer"
import Assets from "./Assets"
import Button from "./Button";
import {useState, useEffect} from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const VoiceLinePlayer = () => {

  const [currentAudio, setCurrentAudio] = useState("");
  let [currentIndex, setCurrentIndex] = useState(0);
  let [audioPlayer, setAudioPlayer] = useState({});
  

  const audioTracks = [Assets.BerserkerAudio, Assets.IllyaArcherAudio, Assets.IllyaCasterAudio, Assets.Sitonai, Assets.WalnutGame]

  useEffect(() => { 
    try{
      audioPlayer.current = new Audio(audioTracks[currentIndex]);
    }catch(err){
      throw new Error(err);
    }
}, [currentIndex]);


const goBackOne = () => currentIndex > 0 ? setCurrentIndex(currentIndex-1):setCurrentIndex(audioTracks.length-1);

const goForwardOne = () => currentIndex === audioTracks.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1);

  return (
    <div>
      <Header />
      <div id = 'main'>
        <section className="major column flex">

        <AudioPlayer
    autoPlay
    src={currentAudio}
  />


<div className = 'flex row justifyContent'>

            <Button
            cname = 'button'
            size = 'large'
            text = <i className="fa-solid fa-backward-step"></i>
            onClick = {(e)=>{
              e.preventDefault();
              console.log(currentAudio)
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
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default VoiceLinePlayer