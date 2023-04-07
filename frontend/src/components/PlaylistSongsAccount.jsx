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

  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);

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

  // Load data for current user
useEffect(() => {
  const userId = localStorage.getItem("id");
  const playlists = playlist.filter((ele) => ele.user === userId);
  const songs = audio.filter((ele) => ele.user === userId);
  setPlaylists(playlists);
  setSongs(songs);
}, [playlist, audio]);


 // Render playlist table
const playlistTable = useMemo(() => {
  return (
      playlists.map((playlist) => (
        <tr key={playlist._id}>
          <td>
            <form onSubmit={handleSubmit}>
              <input
                name="choosePlaylist"
                value={playlist._id}
                className="hidden"
                readOnly={true}
              />
              <button
                className="button"
                onClick={() => {
                  setChoosePlaylist(playlist._id);
                }}
              >
                {playlist.name}
              </button>
            </form>
          </td>
          <td>
            <input
              name="editPlaylist"
              value={playlist._id}
              className="hidden"
              readOnly={true}
            />
            <Link
              to={"/editPlaylist"}
              onClick={() => localStorage.setItem("playlistID", playlist._id)}
              className="fa-solid small fa-pen-to-square button"
            ></Link>
          </td>
          <td>
            <form onSubmit={handleDelete}>
              <button
                onClick={() => {
                  setPlaylistID(playlist._id);
                }}
                className="button small fa-solid fa-trash"
                type="submit"
              ></button>
            </form>
          </td>
        </tr>
      ))
  );
}, [playlists, 
    handleSubmit, 
    handleDelete, 
    setChoosePlaylist, 
    setPlaylistID]);


// Render song list
const songList = useMemo(() => {
  return songs
    .slice(startIndex, endIndex)
    .map((song) => (
      <Post
        key={song._id}
        userID={song.user}
        userName={user.userName}
        id={song._id}
        text={song.name}
      />
    ));
}, [songs, startIndex, endIndex, user.userName]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

// Update table and song list if data changes
useEffect(() => {
  if (playlists.length !== list.length) {
    setList(playlistTable);
  }
  if (songs.length !== rows.length) {
    setRows(songList);
  }
}, [playlists.length, songs.length, list.length, rows.length, playlistTable, songList]);
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
