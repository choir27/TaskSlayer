import axios from "axios";
import {Link} from "react-router-dom"
import React, 
      {useContext, 
       useEffect, 
       useState,
       useCallback,
       useMemo} from "react"
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

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const source = useMemo(() => axios.CancelToken.source(), []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
  
    axios
      .put(`https://illya-site-backend-production.up.railway.app/choosePlaylist/${choosePlaylist}`)
      .then(res=>console.log(res))
      .catch(err=>{
        console.error(err);
        return;
      });

  }, [choosePlaylist]);
  
  const handleDelete = useCallback(e => {
    e.preventDefault();
    
    axios
      .delete(`https://illya-site-backend-production.up.railway.app/deletePlaylist/${playlistID}`)
      .then(res=>console.log(res))
      .catch(error=>{
        console.error(error);
        return;
      });
  
    axios
      .put("https://illya-site-backend-production.up.railway.app/deleteCurrentPlaylist")
      .then(data=>console.log(data))
      .catch(error=>{
        console.error(error);
        return;
      })
  }, [playlistID]);


  useEffect(()=>{

    userContext.then(data=>{
        setUser(data);
    });

    Promise.all([
      fetch("https://illya-site-backend-production.up.railway.app/audio", {
        cancelToken: source.token,
      }),
      fetch("https://illya-site-backend-production.up.railway.app/playlist", {
        cancelToken: source.token,
      })
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => {
      try{
        setAudio(data1);
        setPlaylist(data2);
      }catch(err){
        console.error(err);
        return;
      }
    });

   return () => {
      source.cancel();
    };

  },[]);


  // Displays playlist(s) of current user, can edit/delete/select playlist
  useMemo(()=>{

    const listOfPlaylists = playlist
      .filter((ele) => ele.user === localStorage.getItem("id"))
      .map(ele=>
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
    );

    setList(listOfPlaylists);

  },[playlist,
    handleDelete,
    handleSubmit]);

// Displays all songs of current user, can play music, add music to playlist, or delete music
  useMemo(()=>{
    const listOfSongs = audio
      .filter(ele=>ele.user === localStorage.getItem("id"))
      .slice(startIndex, endIndex).map(ele=>
            <Post 
              key = {ele._id}
              userID = {ele.user}
              userName = {user.userName} 
              id = {ele._id} 
              text = {ele.name} 
            />
      );

  if (listOfSongs.length !== rows.length) {
  setRows(listOfSongs);
  };

  },[audio, 
    rows,
    rows.length, 
    user.userName,
    startIndex,
    endIndex]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return(
    <section className ="flex tables">
      <div className = "table-wrapper">

        <h2 className = "tableHeading">Songs</h2>

        <table>

          <thead>
            <tr>
              <th>Song Name</th>
              <th></th>
              <th>Playlist</th>
              <th>Delete</th>
              <th>User</th>
            </tr>
          </thead>

          <tbody>
            {rows}
          </tbody>
        </table>

        
      <div className="pagination">
          {Array.from({ length: Math.ceil(audio.length / rowsPerPage) }, (_, i) => (
            <button 
            key={i} 
            onClick={() => {
              handlePageChange(i + 1)
            }}
            className = "button small"
            >
              {i + 1}
            </button>
          ))}
      </div>
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

export default React.memo(PlaylistSongs);
