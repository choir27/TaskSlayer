import Button from "../components/Button"
import axios from "axios"
import {Link} from "react-router-dom"
import {useState, 
        useEffect,
        useMemo,
        useCallback} from "react"

const Dashboard = () => {
  
  const [rows, setRows] = useState([]);
  const [list, setList] = useState([]);
  const [display, setDisplay] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [audio, setAudio] = useState([]);
  const [users, setUsers] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const fetchData = useCallback(async () => {
    try {
      const { data: userData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/api"
      );
      const { data: audioData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/audio"
      );
      const { data: playlistData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/playlist"
      );
      setUsers(userData);
      setAudio(audioData);
      setPlaylist(playlistData);
    } catch (err) {
      console.error(err);
    }
  }, []);


  useEffect(() => {
    fetchData();

    localStorage.setItem("display", display);
  },[fetchData, display]);


  useMemo(() => {
    const listOfPlaylists = playlist;
    const listOfUsers = users;
    if(listOfUsers.length){
    const userMap = new Map();
    const result = [];
    
    for (const user of listOfUsers) {
      userMap.set(user._id, user);
    }
  
    for (const playlistList of listOfPlaylists) {
      const user = userMap.get(playlistList.user);
      if (user) {
        result.push(
          <tr key={playlistList._id}>
            <td><Link className = "button" to = "/editPlaylist" onClick = {()=>localStorage.setItem("playlistID", playlistList._id)}>{playlistList.name}</Link></td>
            <td></td>
            <td></td>
            <td>{user.userName}</td>
          </tr>
        );
      }
    }
    
    setList(result);
  }
  }, [playlist, users]);

  useMemo(() => {
    const songList = audio.slice(startIndex, endIndex);
    const listOfUsers = users;
    if(listOfUsers.length){
    const userMap = new Map();
    const result = [];
    
    for (const user of listOfUsers) {
      userMap.set(user._id, user);
    }
  
    for (const song of songList) {
      const user = userMap.get(song.user);
      if (user) {
        result.push(
          <tr key={song._id}>
            <td>{song.name}</td>
            <td>
              <button
                className="button small"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("song", song._id);
                  window.location.reload();
                }}
              >
                Play
              </button>
            </td>
            <td></td>
            <td></td>
            <td>{user.userName}</td>
          </tr>
        );
      }
    }
  
    setRows(result);
  }
  }, [audio, endIndex, startIndex, users]);
  


const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
}

  return (
    <div>
      <div className = "flex">

         <Button 
         cname = 'button'
         size = 'large'
         onClick = {()=>{setDisplay(false)
         localStorage.setItem('display', display)
         }} 
         text = 'playlist'/>

         <Button
         cname = 'button'
         size = 'large'
         onClick = {()=>{setDisplay(true)
         localStorage.setItem('display',display)
         }}
         text = 'song'
         />

      </div>


      {display ? 

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

          <div className="pagination">
          {Array.from({ length: Math.ceil(audio.length / rowsPerPage) }, (_, i) => (
            <button 
            key={i} 
            onClick={() => {
              handlePageChange(i + 1)
            }}
            className = "page"
            >
              {i + 1}
            </button>
          ))}
      </div>
        </div>


      :

        <div className = "table-wrapper">
          <h2 className = "tableHeading">Playlists</h2>
          <table>
            <thead>
              <tr>
                <th>Playlist Name</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
            {list}
            </tbody>
          </table>
        </div>

      }


    </div>
  )
}

export default Dashboard