import {useContext, 
        useState, 
        useEffect} from "react"

import {GetUser, 
        GetAudio} from "../hooks/FetchHooks"

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

    GetAudio.then(data=>{
      setAudio(data)
    })

    //Lists all songs posted by users
    GetUser.then(users=>{

      const songList = [];

        audio.forEach(song => {
          users.forEach(element =>{

            if(element._id === song.user){
              songList.push(<Post 
                            id = {song._id} 
                            text={song.name} 
                            key={song._id} 
                            userName={element.userName} 
                            userID={element._id} 
                            />);
            }

          })
        })

      setRows(songList);

    })

    localStorage.setItem("display", display);

  },[audio, 
    display, 
    userContext])

  return (
    <div>
      <UserHeader/>
      <div id = "main">

        <section className="major column flex">
        <h1>Dashboard</h1>

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