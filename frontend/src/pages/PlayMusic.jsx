import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useEffect, useState, useContext, useCallback, useMemo} from "react"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

import {MyContext} from "../middleware/Context"
import axios from "axios"

const PlayMusic = () => {
  const userContext = useContext(MyContext);
  const [audioSource, setAudioSource] = useState({});

  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const [listOfPlaylists, setListOfPlaylists] = useState({});
  const [listOfAudio, setListOfAudio] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);

  const [playlist, setPlaylist] = useState('');

  const audio = localStorage.getItem("song");
  const navigate =useNavigate();

  const [rows, setRows] = useState([]);

  const fetchData = useCallback(async () => {
    try{
      const { data: playlistData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/playlist"
      );
      const { data: audioData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/audio"
      );
      const { data: userData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/api"
      );

      setListOfUsers(userData);
      setListOfAudio(audioData);
      setListOfPlaylists(playlistData);
    }catch(err){
      console.error(err);
    }
  }, [])


  useEffect(()=>{
    fetchData();
  },[fetchData]);

  useMemo(()=>{

    const array = [];

    if(listOfPlaylists.length){
    listOfPlaylists.forEach((ele)=>{
      if(ele.user === localStorage.getItem("id")){
        array.push(<option value = {ele._id} key = {ele._id}>{ele.name}</option> )
      };
    });

    setRows(array);
  }
  },[listOfPlaylists]);


    userContext.then(data=>{
        setCurrentUser(data);
    });


    useMemo(()=>{
      if(audio){
        // Create a dictionary that maps _id values to their corresponding ele objects
        const songMap = {};
        listOfAudio.forEach(ele=>{
            songMap[ele._id] = ele;

        // Look up the desired ele object in constant time
        const selectedSong = songMap[audio];

        if (selectedSong) {
          setAudioSource(selectedSong);

          setUser(listOfUsers.find(element=>element._id === selectedSong.user));
        }
        });

      }
    },[audio, listOfAudio, listOfUsers])

  const handleAddToPlaylist = useCallback(async (e) => {
    e.preventDefault();

    if(listOfPlaylists[0].songs){
      for(let i = 0; i <listOfPlaylists[0].songs.length; i++){
        if(listOfPlaylists[0].songs[i]._id === audio){
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
          .then(res=>res.json())
          .catch(err=>console.error(err));

        axios
          .put(`https://illya-site-backend-production.up.railway.app/choosePlaylist/${playlist}`, formData, {})
          .then(res=>{
            console.log(res)
            navigate("/editPlaylist");
          });


      }catch(err){
        console.error(err);
      }
    }else{
      toast.error("Please Choose A Valid Option");
      return;
    }
   
  },[audio, navigate, playlist, listOfPlaylists])

  const handleDelete = useCallback((e) => {
    e.preventDefault();
    try{
      axios
      .delete(`https://illya-site-backend-production.up.railway.app/deletePost/${audio}`)
      .then(res=>{
        console.log(res);
        localStorage.setItem("song", "");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });

    }catch(err){
      console.error(err);
    }

  },[audio, navigate]);

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

