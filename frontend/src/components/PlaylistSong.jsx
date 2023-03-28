import axios from "axios";
import {useState} from "react"

const PlaylistSong = ({ text, id, userName, userID, hidden }) => {
  
  const [songID ,setSongID] = useState('')

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
      })

      
      window.location.reload();

    }
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