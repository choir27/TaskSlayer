import axios from "axios";
import {useContext, useState, useEffect} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"

const Post = ({ text, id, userName, userID }) => {
  
  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})
  const [playlist, setPlaylist] = useState('')

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[])

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
        .put(`http://localhost:8000/editPlaylist/${id}`, formData, {})
        .then(res=>console.log(res))
        .catch(err=>{
          console.error(err);
          return;
        })
    }else{
      toast.error("Please Choose A Valid Option")
      return;
    }
   
  }


  return (
    <li className="post">
    {trim(text)}
    <form onSubmit={handleAddToPlaylist}>
        <select name = "playlist"
        value = {playlist}
        onChange = {(e)=>setPlaylist(e.target.value)}
        >
          <option value = {playlist}>{playlist}</option>
          <option value = "playlist1">playlist1</option>
          <option value="playlist2">playlist2</option>
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
        onClick = {()=>window.location.reload()}
         className="button small fa-solid fa-trash" type="submit"></button>
         : ""
         }
    {userName}
      </form>
    </li>
  );
};

export default Post;