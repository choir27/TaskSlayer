import axios from "axios";
import { Link} from "react-router-dom";
import React, { useContext, useEffect, useState, useCallback, useMemo, useRef } from "react";
import { MyContext } from "../middleware/Context";
import Post from "./Post";

const PlaylistSongs = () => {
  const userContext = useContext(MyContext);
  const [user, setUser] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [audio, setAudio] = useState([]);
  const [choosePlaylist, setChoosePlaylist] = useState("");
  const [list, setList] = useState([]);
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const index = useRef({});

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const fetchData = useCallback(async () => {
    try {
      const { data: playlistData } = await axios.get("https://illya-site-backend-production.up.railway.app/playlist");
      const { data: audioData } = await axios.get("https://illya-site-backend-production.up.railway.app/audio");

      const playlists = playlistData.filter((ele) => ele.user === localStorage.getItem("id"));
      const songs = audioData.filter((ele) => ele.user === localStorage.getItem("id"));

      setPlaylist(playlists);
      setAudio(songs);

      const currentUserData = await userContext;
      setUser(currentUserData);
    } catch (err) {
      console.error(err);
    }
  }, [userContext]);

  useEffect(() => {
    userContext.then((data) => {
      setUser(data);
    });

    fetchData();
  }, [fetchData, userContext]);
  
  const getPlaylistID = useCallback(async()=>{
    setChoosePlaylist(playlist.map(ele=>ele._id));
  },[playlist]);

  useMemo(getPlaylistID,[getPlaylistID]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        axios.put(`https://illya-site-backend-production.up.railway.app/choosePlaylist/${choosePlaylist[index.current.playlist]}`)
          .then(res=>{
            console.log(res);
            window.location.reload();
          })
          .catch(err=>{
            console.error(err)
          });
        
      } catch (err) {
        console.error(err);
      }
    },
    [choosePlaylist]
  );

  const handleDelete = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        await axios.put("https://illya-site-backend-production.up.railway.app/deleteCurrentPlaylist")
          .then(res=>console.log(res))
          .catch(err=>{
            console.error(err);
          })

        await axios.delete(`https://illya-site-backend-production.up.railway.app/deletePlaylist/${choosePlaylist[index.current.playlist]}`)
          .then(res=>{
            console.log(res);
            window.location.reload();
          })
          .catch(err=>{
            console.error(err);
          })
      } catch (err) {
        console.error(err);
      }
    }, [choosePlaylist]);

  // Render playlist table
  const playlistTable = useMemo(() =>{
      const array = [];

      playlist.forEach((playlist,i)=>{
        array.push(
        <tr key={playlist._id}>
          <td>
            <form onSubmit={handleSubmit}>
              <button className="button" type="submit" onClick = {()=>index.current.playlist = i}>
                {playlist.name}
              </button>
            </form>
          </td>
          <td>
            <input name="editPlaylist" value={playlist._id} className="hidden" readOnly={true} />
            <Link to={"/editPlaylist"} onClick={() => localStorage.setItem("playlistID", playlist._id)} className="fa-solid small fa-pen-to-square button"></Link>
          </td>
          <td>
            <form onSubmit={handleDelete}>
              <button onClick={() =>index.current.playlist = i} className="button small fa-solid fa-trash" type="submit"></button>
            </form>
          </td>
        </tr>
      );
    });

    return array;

  }, [playlist, handleSubmit, handleDelete])

// Render song list
const songList = useMemo(() => {
  return audio
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
}, [audio, startIndex, endIndex, user.userName]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


// Update table and song list if data changes
useEffect(() => {
  if (playlist && list && playlist.length !== list.length) {
    setList(playlistTable);
  }
  if (playlist && list && audio.length !== rows.length) {
    setRows(songList);
  }
}, [ playlistTable, songList, audio.length, list, playlist, rows.length]);

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