import { useEffect, useState, useContext, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../middleware/Context";
import axios from "axios";
import NavPanel from "../components/NavPanel";
import Header from "../components/Header";
import UserHeader from "../components/UserHeader";
import Footer from "../components/Footer";

const PlayMusic = () => {
  const userContext = useContext(MyContext);
  const [audioSource, setAudioSource] = useState({});
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [listOfPlaylists, setListOfPlaylists] = useState([]);
  const [listOfAudio, setListOfAudio] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [playlist, setPlaylist] = useState("");
  const [rows, setRows] = useState([]);

  const audio = localStorage.getItem("song");
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
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
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const memoizedOptions = useCallback(() => {
    const array = [];

    if (listOfPlaylists) {
      listOfPlaylists.forEach((ele) => {
        if (ele.user === localStorage.getItem("id")) {
          array.push(
            <option value={ele._id} key={ele._id}>
              {ele.name}
            </option>
          );
        }
      });
    }

    return array;
  }, [listOfPlaylists]);

  useMemo(() => setRows(memoizedOptions()), [memoizedOptions]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await userContext;
        setCurrentUser(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [userContext]);

  useMemo(() => {
    if (audio && listOfAudio && listOfUsers) {
      // Create a dictionary that maps _id values to their corresponding ele objects
      const songMap = {};
      listOfAudio.forEach((ele) => {
        songMap[ele._id] = ele;
      });
      // Look up desired object
      const selectedSong = songMap[audio];
      if (selectedSong) {
        setAudioSource(selectedSong);
        setUser(
          listOfUsers.find((element) => element._id === selectedSong.user)
        );
      }
    }
  }, [audio, listOfAudio, listOfUsers]);

  const handleAddToPlaylist = useCallback(async (e) => {
    e.preventDefault();
    
    if(playlist !== ""){

      if(listOfPlaylists.songs){
        for(let i = 0; i <listOfPlaylists.songs.length; i++){
          if(listOfPlaylists.songs[i]._id === audio){
            toast.error("Song already exists in playlist");
            return;
          };
        };
      };

      try{
        const formData = new URLSearchParams();
        formData.append("playlist", playlist);

        await axios
          .put(`https://illya-site-backend-production.up.railway.app/addToPlaylist/${audio}`, formData, {})
          .then(res=>res.json())
          .catch(err=>console.error(err));

        await axios
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

  const handleDelete = useCallback(async(e) => {
    e.preventDefault();
    try{
      await axios
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
    <div id = "wrapper">
      <NavPanel/>
      {currentUser ? <UserHeader idName = "nav"/> : <Header idName = "nav"/>}
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

            <section className = "flex" id = "playMusic">
                {currentUser ?
                      <form onSubmit={handleAddToPlaylist}>
                        <select name = "playlist"
                          onChange = {(e)=>{
                          setPlaylist(e.target.value)}}
                        >
                          <option value = ''></option>
                          {rows}
                        </select>
                        <button className="fa-solid fa-plus button small" type = "submit" onClick = {()=>localStorage.setItem("playlistID",playlist)}/>
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

