import axios from "axios";
import {Link} from "react-router-dom"
import {useContext, 
        useEffect, 
        useState} from "react"
import {MyContext} from "../middleware/Context"
import Post from "./Post"

const PlaylistSongs = () =>{
  const userContext = useContext(MyContext);
  const [user, setUser] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [audio, setAudio] = useState([]);
  const [choosePlaylist, setChoosePlaylist] = useState({});
  const [playlistID, setPlaylistID] = useState("");
  const [list, setList] = useState([]);
  const [rows, setRows] = useState([]);
  
  useEffect(()=>{

    userContext.then(data=>{
      try{
        setUser(data);
      }catch(err){
        console.error(err);
        return;
      }
    });

    fetch("https://illya-site-backend-production.up.railway.app/audio")
      .then(res=>res.json())
      .then(data=>{
      try{
          setAudio(data);
      }catch(err){
        console.error(err);
        return;
      }
    })

    fetch("https://illya-site-backend-production.up.railway.app/playlist")
      .then(res=>res.json())
      .then(data=>{
    try{
        setPlaylist(data);
    }catch(err){
      console.error(err);
      return;
    }
  })

    try{

      // Displays playlist(s) of current user, can edit/delete/select playlist
      const playlists = [];

          playlist.forEach(ele=>{
            if(ele.user === localStorage.getItem('id')){
              playlists.push(
                <tr key = {ele._id}>

                  <td>
                    <form onSubmit = {handleSubmit}>
                    
                      <input 
                      name = "choosePlaylist" 
                      value = {ele._id}
                       className = "hidden" 
                       readOnly = {true}
                      />

                      <button 
                      className = "button" 
                      onClick = {()=>{
                        setChoosePlaylist(ele._id)}
                      }>{ele.name}
                      </button>

                    </form>
                  </td>

                  <td>
                    <input 
                    name = "editPlaylist" 
                    value = {ele._id} 
                    className = "hidden" 
                    readOnly = {true}
                    />

                    <Link to = {"/editPlaylist"}
                    onClick = {()=>
                      localStorage.setItem('playlistID', ele._id)
                    } 
                    className = "fa-solid small fa-pen-to-square button">
                    </Link>
                  </td>
                            
                  <td>
                    <form onSubmit = {handleDelete}>
                      <button
                          onClick = {()=>{
                          setPlaylistID(ele._id)
                          }}
                          className="button small fa-solid fa-trash" 
                          type="submit">    
                      </button>
                    </form>
                  </td>
                </tr>
              )
            };
          });
        setList(playlists);

      // Displays all songs of current user, can play music, add music to playlist, or delete music
      const array = [];

      audio.forEach(ele=>{
        if(ele.user === localStorage.getItem('id')){
          array.push(<Post 
                      key = {ele._id}
                      userID = {ele.user}
                      userName = {user.userName} 
                      id = {ele._id} 
                      text = {ele.name} 
                    />)
          };
      });
      setRows(array);

    }catch(err){
      console.error(err);
      return;
    }
  

  },[userContext, playlist, audio]);

  const handleSubmit = e => {
    try{
      e.preventDefault();

      axios
          .put(`https://illya-site-backend-production.up.railway.app/choosePlaylist/${choosePlaylist}`)
          .then(res=>console.log(res))
          .catch(err=>{
            console.error(err);
            return;
          })  
    }catch(err){
      console.error(err);
    }
   
  };

  const handleDelete = e => {
    try{
      e.preventDefault();
    
      axios
        .delete(`https://illya-site-backend-production.up.railway.app/deletePlaylist/${playlistID}`)
        .then(res=>{
        })
        .catch(error=>{
          console.error(error);
          return;
        })

      axios
        .put("https://illya-site-backend-production.up.railway.app/deleteCurrentPlaylist")
        .then(data=>{
          console.log(data);
        })

    }catch(err){
      console.error(err);
      return;
    }
   
  };

  return(
    <section className ="flex tables">
      <div className = "table-wrapper">

        <h2 className = "tableHeading">Songs</h2>

        <table>
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Playlist</th>
              <th>Delete</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>

      <div className = "table-wrapper">
        <h2 className = "tableHeading">Playlists</h2>

        <table>
          <thead>
            <tr>
              <th>Playlist Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {list}  
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PlaylistSongs