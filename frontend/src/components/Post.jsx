import axios from "axios";
import {useContext, useState, useEffect} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"

const Post = ({ text, id, userName, userID }) => {
  
  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})
  const [playlist, setPlaylist] = useState('')
  const [songs, setSongs] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[userContext])

  useEffect(()=>{
    const getPlaylists = async()=>{
      const data = await fetchPlaylist();
      setSongs(data);
    }

    getPlaylists()
  }, [])

  const fetchPlaylist = async () => {
    try{
      let res = await fetch("http://localhost:8000/playlist");
      let data = await res.json();
      return data;
    }catch(err){
      console.error(err);
    }
  }

 const trim = (str) => {
    if (str.length > 15) {
      return str.substr(0, 30) + "...";
    } else {
      return str;
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
      axios
      .delete(`http://localhost:8000/deletePost/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error);
        return;
      });
  };

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    if(playlist !== ""){
      const formData = new URLSearchParams()
      formData.append("playlist", playlist)
      axios
        .put(`http://localhost:8000/addToPlaylist/${id}`, formData, {})
        .then(res=>console.log(res))
        .catch(err=>{
          console.error(err);
          return;
        })

      axios
        .put(`http://localhost:8000/choosePlaylist/${playlist}`)
        .then(res=>console.log(res))
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

  let rows = []

  if(songs){
    songs.forEach((ele)=>{
      if(ele.user === localStorage.getItem("id")){
        rows.push(<option value = {ele._id} key = {ele._id}>{ele.name}</option> )
      }

   })
  }


  return (
    <li className="post flex">
    {trim(text)}
    <form onSubmit={handleAddToPlaylist}>
        <select name = "playlist"
        value = {playlist}
        onChange = {(e)=>{
          setPlaylist(e.target.value)}}
        >
          <option value = ''></option>
          {rows}
        </select>
        <button className="fa-solid fa-plus button small"
        type = "submit"
        onClick = {()=>{
          if(playlist !== ""){
            window.location.reload();
          }
        }}>
        </button>
    </form>
      <form onSubmit={handleDelete}>
        {user._id === userID ?
        <button
         className="button small fa-solid fa-trash" type="submit"></button>
         : ""
         }
    {userName}
      </form>
    </li>
  );
};

export default Post;