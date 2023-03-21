import axios from "axios";
import {useContext, useState, useEffect} from "react"
import {MyContext} from "../middleware/Context"

const PlaylistSong = ({ text, id, userName, userID, hidden }) => {
  
  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})
  const [songID ,setSongID] = useState('')
  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[userContext])

 const trim = (str) => {
    if (str.length > 15) {
      return str.substr(0, 30) + "...";
    } else {
      return str;
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if(songID){
        const formData = new URLSearchParams()
        formData.append('songID', songID);
      axios
      .put(`http://localhost:8000/editPlaylist/${localStorage.getItem('playlistID')}`, formData, {
      }).then(res=>console.log(res))
      .then(data=>console.log(data))
    }
window.location.reload();    
};

  return (
  <tr className = {hidden}>
    <td>
      {trim(text)}
    </td>
    <td>
    <form onSubmit={handleDelete}>
        <input className = "hidden" name = "songID" value = {id} readOnly = {true}/>
        <button
         className="button small fa-solid fa-xmark" type="submit"
         onClick = {()=>{setSongID(id)}}
         ></button>
    </form>
    </td>
    <td>
      {userName}
    </td>
  </tr>
  );
};

export default PlaylistSong;