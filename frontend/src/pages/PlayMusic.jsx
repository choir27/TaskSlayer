import Footer from "../components/Footer";
import UserHeader from "../components/UserHeader"
import {useEffect, useState, useContext} from "react"
import {MyContext} from '../middleware/Context'
import {GetAudio, GetUser} from "../hooks/FetchHooks"
import axios from "axios";
import {toast} from "react-toastify"
import {GetPlaylist} from "../hooks/FetchHooks"
import {useNavigate} from "react-router-dom"

const PlayMusic = () => {
    const userContext = useContext(MyContext)
const [audioSource, setAudioSource] = useState({})
const [user, setUser] = useState({})
const [currentUser, setCurrentUser] = useState({})
const [playlist, setPlaylist] = useState('')
const [songs, setSongs] = useState([])

const audio = localStorage.getItem("song")    
const navigate =useNavigate();

useEffect(()=>{

userContext.then(data=>{
    setCurrentUser(data)
})

GetPlaylist.then(data=>{
    setSongs(data)
})

if(audio){
GetAudio.then(song=>{
    song.forEach(ele=>{
        if(audio === ele._id){
            setAudioSource(ele)

            GetUser.then(account=>{
                setUser(account.find(element=>element._id === ele.user))
            })
        }
    })
})


}
    
},[audio, userContext])


const handleAddToPlaylist = async (e) => {
    e.preventDefault();

    if(songs[0].songs){
      for(let i = 0; i <songs[0].songs.length; i++){
        if(songs[0].songs[i]._id === audio){
          toast.error("Song already exists in playlist");
          return;
        }
      }
    }

    if(playlist !== ""){
      const formData = new URLSearchParams()
      formData.append("playlist", playlist)
      axios
        .put(`http://localhost:8000/addToPlaylist/${audio}`, formData, {})
        .then(res=>res.json())
        .then(data=>console.log(data))
      axios
        .put(`http://localhost:8000/choosePlaylist/${playlist}`, formData, {})
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          console.error(err);
          return;
        })
      window.location.reload();
    }else{
      toast.error("Please Choose A Valid Option")
      return;
    }
   
  }

  const handleDelete = (e) => {
    e.preventDefault();
      axios
      .delete(`http://localhost:8000/deletePost/${audio}`)
      .then(res=>console.log(res))
      .catch((error) => {
        console.error(error);
        return;
      });

      navigate('/dashboard');
      window.location.reload();

  };


  let rows = []

  if(songs){
    songs.forEach((ele)=>{
      if(ele.user === localStorage.getItem("id")){
        rows.push(<option value = {ele._id} key = {ele._id}>{ele.name}</option> )
      }

   })
  }


  return (
    <div>
        <UserHeader/>
  <div id="main">
        <article className="post">
          <section className="major">
                <h2>Playing {audioSource.name}</h2>
                <h3>Posted by {user.userName}</h3>

                <section>
                <audio 
                  controls ={true}
                  autoPlay = {true}
                    src = {audioSource.audio}>
                    </audio>  
{ currentUser ?
                    <form onSubmit={handleAddToPlaylist}>
        <select name = "playlist"
        onChange = {(e)=>{
          setPlaylist(e.target.value)}}
        >
          <option value = ''></option>
          {rows}
        </select>
        <button className="fa-solid fa-plus button small" type = "submit">
        </button>
  </form> :
  ""             
}

{currentUser ?
  <form onSubmit={handleDelete}>
        {currentUser._id === user._id?
        <button
         className="button small fa-solid fa-trash" type="submit"
         ></button>
         : ""
         }
      </form>
               : ""
              }
            </section>
          </section>
          </article>
   </div>       
   <Footer/>

<div id="copyright">
    &copy; choir Design: HTML5 UP
</div>

    </div>
  )
}

export default PlayMusic

