import {useEffect,
        useState} from "react"

const PlaylistSong = ({ text, 
                        id, 
                        userName
                      }) => {
  
  const handleDelete = async (e) => {
    try{      
      e.preventDefault();

      const res = await fetch(`https://illya-site-backend-production.up.railway.app/editPlaylist/${localStorage.getItem('playlistID')}`, {
        credentials: "same-origin",
        method: "PUT",
        headers: {
          "Content-type": "application/json"      
        },
        body: JSON.stringify({id})
      });

      await res.json();

    }catch(err){
      console.error(err);
      return;
    }
    
  };

  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    setSongs(
  <tr>
    <td className = "flex">
      {text}
    </td>

    <td>
      <form onSubmit={handleDelete}>

          <input 
          className = "hidden" 
          name = "songID" 
          value = {id} 
          readOnly = {true}
          />

          <button
          className="button small fa-solid fa-xmark" 
          type="submit"
          />
      </form>
    </td>

    <td>
      {userName}
    </td>

    </tr>
    );
  }, [])

  return songs
};

export default PlaylistSong;