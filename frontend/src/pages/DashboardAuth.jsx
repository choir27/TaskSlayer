import {useContext, 
        useState, 
        useEffect} from "react"

import {MyContext} from "../middleware/Context"
import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Post from "../components/Post"
import Button from "../components/Button"
import PlaylistPost from "../components/PlaylistPost"

const Dashboard = () => {
  
  const userContext = useContext(MyContext);
  const [audio, setAudio] = useState([]);
  const [rows, setRows] = useState([]);
  const [display, setDisplay] = useState(true);

  useEffect(()=>{

    fetch("https://illya-site-backend-production.up.railway.app/audio")
      .then(res=>res.json())
      .then(data=>{
      setAudio(data)
    })

    //Lists all songs posted by users
    const songList = [];

    fetch("https://illya-site-backend-production.up.railway.app/api")
      .then(res=>res.json())
      .then(users=>{

      const userMap = users.reduce((acc, user) => {
        acc[user._id] = user;
        return acc;
      }, {});

      audio.forEach(song => {
        const user = userMap[song.user];
        if (user) {
          songList.push(<Post 
                          key={song._id} 
                          id={song._id} 
                          text={song.name} 
                          userName={user.userName} 
                          userID={user._id} 
                        />);
        }

      });
      
      setRows(songList);

    })

    localStorage.setItem("display", display);

  },[audio, 
    userContext,
    rows,
    display])

  return (
    <div>
      <UserHeader/>
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
        </div>
        :

        <PlaylistPost/>
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