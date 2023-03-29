import axios from "axios";
import {GetPlaylist, 
        GetAudio} from "../hooks/FetchHooks"
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
  const [choosePlaylist, setChoosePlaylist] = useState({});
  const [playlistID, setPlaylistID] = useState("");
  const [list, setList] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(()=>{

    userContext.then(data=>{
      setUser(data);
    });

    const handleSubmit = e => {
      try{
        e.preventDefault();

        axios
            .put(`http://localhost:8000/choosePlaylist/${choosePlaylist}`)
            .then(res=>{
              if(res){
                console.log(res);
                window.location.reload();
              }
            })
            .catch(err=>{
              console.error(err);
              return;
            })  
      }catch(err){
        console.error(err);
      }
     
    };
  
    const handleDelete = e => {
      e.preventDefault();
      
      axios
        .delete(`http://localhost:8000/deletePlaylist/${playlistID}`)
        .then(res=>{
          axios
          .put("http://localhost:8000/deleteCurrentPlaylist")
          .then(data=>{
            console.log(data);
          })
        })
        .catch(error=>{
          console.error(error);
          return;
        })
        window.location.reload();

    };

    GetPlaylist.then(data=>{

        setPlaylist(data);
        const playlists = [];

          data.forEach(ele=>{
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

    });

    GetAudio.then(data=>{
      const audio = [];
      data.forEach(ele=>{
        if(ele.user === localStorage.getItem('id')){
          audio.push(<Post 
                      userID = {ele.user}
                      userName = {user.userName} 
                      id = {ele._id} 
                      text = {ele.name} 
                      key = {ele._id}
                    />)
        };
      });
      setRows(audio);
    });

  },[user,userContext, playlist, playlistID, choosePlaylist]);

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