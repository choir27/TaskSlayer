import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useEffect,
        useState, 
        useContext} from "react"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

import {MyContext} from "../middleware/Context"
import {GetAudio, 
        GetUser,
        GetPlaylist} from "../hooks/FetchHooks"
import axios from "axios"

const PlayMusic = () => {
  const userContext = useContext(MyContext);
  const [audioSource, setAudioSource] = useState({});

  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const [playlist, setPlaylist] = useState('');
  const [songs, setSongs] = useState([]);

  const audio = localStorage.getItem("song");
  const navigate =useNavigate();

  const [rows, setRows] = useState([]);

  useEffect(()=>{

    const array = [];

    songs.forEach((ele)=>{
      if(ele.user === localStorage.getItem("id")){
        array.push(<option value = {ele._id} key = {ele._id}>{ele.name}</option> )
      };
    });

    setRows(array);

    userContext.then(data=>{
        setCurrentUser(data);
    });

    GetPlaylist.then(data=>{
        setSongs(data);
    });

      if(audio){
        GetAudio.then(song=>{
          song.forEach(ele=>{
            if(audio === ele._id){
              setAudioSource(ele);

              GetUser.then(account=>{
                setUser(account.find(element=>element._id === ele.user));
              });
            };
          });
        });
      };
    
  },[audio, userContext, songs]);


  const handleAddToPlaylist = async (e) => {
    e.preventDefault();

    if(songs[0].songs){
      for(let i = 0; i <songs[0].songs.length; i++){
        if(songs[0].songs[i]._id === audio){
          toast.error("Song already exists in playlist");
          return;
        };
      };
    };

    if(playlist !== ""){

      try{
        const formData = new URLSearchParams();
        formData.append("playlist", playlist);

        axios
          .put(`https://illya-site-backend-production.up.railway.app/addToPlaylist/${audio}`, formData, {})
          .then(res=>{res.json()
            axios
              .put(`https://illya-site-backend-production.up.railway.app/choosePlaylist/${playlist}`, formData, {})
              .then(res=>{
                console.log(res)
              });
          })
          .catch(err=>{
            console.error(err);
            return;
          });

        window.location.reload();

      }catch(err){
        console.error(err);
        return;
      }
    }else{
      toast.error("Please Choose A Valid Option");
      return;
    }
   
  }

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`https://illya-site-backend-production.up.railway.app/deletePost/${audio}`)
      .then(res=>console.log(res))
      .catch((error) => {
        console.error(error);
        return;
      });

    navigate("/dashboard");
    window.location.reload();

  };

  return (
    <div>
      {currentUser ? <UserHeader/> : <Header/>}
      <div id="main">
        <article className="post">
          <section className="major">
            <h2>Playing {audioSource.name}</h2>
            <h3>Posted by {user.userName}</h3>

            <section>

                <audio 
                  controls ={true}
                  autoPlay = {true}
                  src = {audioSource.audio}
                />

                {currentUser ?
                    <form onSubmit={handleAddToPlaylist}>
                      <select name = "playlist"
                        onChange = {(e)=>{
                        setPlaylist(e.target.value)
                        }}
                      >
                        <option value = ""></option>
                        {rows}
                      </select>

                      <button 
                        className="fa-solid fa-plus button small" 
                        type = "submit"/>
                    </form>
                : ""             
                }

                {currentUser ?
                  <form onSubmit={handleDelete}>
                    {currentUser._id === user._id ?
                      <button
                        className="button small fa-solid fa-trash" 
                        type="submit"
                      />
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

