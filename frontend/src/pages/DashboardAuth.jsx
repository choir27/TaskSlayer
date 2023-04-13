import {useState, 
        useEffect,
        useMemo,
        useCallback} from "react"
import axios from "axios"
import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Post from "../components/Post"
import Button from "../components/Button"
import DashboardPlaylist from "../components/DashboardPlaylist"
import NavPanel from "../components/NavPanel"

const Dashboard = () => {
  
  const [audio, setAudio] = useState([]);
  const [rows, setRows] = useState([]);
  const [display, setDisplay] = useState(true);
  const [users, setUsers] = useState([]);
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
      setUsers(userData);
      setAudio(audioData);

    } catch (err) {
      console.error(err);
    }
  }, []);


  useEffect(()=>{
    fetchData();

    localStorage.setItem("display", display);
  },[display, fetchData]);

  useMemo(()=>{

    //Lists all songs posted by users
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
          result.push(<Post 
                          key={song._id} 
                          id={song._id} 
                          text={song.name} 
                          userName={user.userName} 
                          userID={user._id} 
                        />);
        }
    }

      setRows(result);

    localStorage.setItem("display", display);
    }
  },[audio, 
    endIndex,
    startIndex,
    users,
    display])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }
    

  return (
    <div id = "wrapper">
      <NavPanel/>
      <UserHeader idName = "nav"/>
      <div id = "main">

        <section className="major column flex">
        <h1 className = "flex justifyContent">Dashboard</h1>

        {/*toggle between show playlist/songs*/}
          <div className = "flex">

            <Button 
            cname = "button"
            size = "large"
            onClick = {()=>{
              setDisplay(false)
              localStorage.setItem("display", display)
            }} 
            text = "playlist"/>

            <Button
            cname = "button"
            size = "large"
            onClick = {()=>{
              setDisplay(true)
              localStorage.setItem("display",display)
            }
          }
            text = "song"
            />

          </div>

        {display ? 

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
        :

        <DashboardPlaylist/>
        }

        </section>

      </div>

      <Footer />

      <div id="copyright">
        &copy; choir Design: HTML5 UP
      </div>

    </div>

  )
}

export default Dashboard