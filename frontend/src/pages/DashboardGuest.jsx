import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useContext, useState, useEffect} from "react"
import {MyContext} from "../middleware/Context"
import {GetUser, GetAudio, GetPlaylist} from "../hooks/FetchHooks"
import Button from "../components/Button"

const Dashboard = () => {
  
  const userContext = useContext(MyContext)
  const [audio, setAudio] = useState([])
  const [rows, setRows] = useState([])
  const [display, setDisplay] = useState(true)
  const [playlist, setPlaylist] = useState([])

  useEffect(()=>{

    GetPlaylist.then(play => {
      GetUser.then(users=>{
        const playList = []
        play.forEach(ele=>{
          users.forEach(element=>{
            if(element._id === ele.user){
              playList.push(<tr>
                <td>{ele.name}</td>
                <td></td>
                <td></td>
                <td>{element.userName}</td>
              </tr>)
            }
          })
        })
        setPlaylist(playList)

      })
    })

    GetAudio.then(data=>setAudio(data))
    GetUser.then(users=>{

      const songList = []

        audio.forEach(song => {
          users.forEach(element =>{
            if(element._id === song.user){
              songList.push(
              <tr key = {song._id}>
                <td>{song.name}</td>
                <td></td>
                <td></td>
                <td>{element.userName}</td>
              </tr>);
            }
          })
        })
        setRows(songList)

      })

      localStorage.setItem("display", display)

      },[audio, display, userContext])


  return (
    <div>
      {userContext? <UserHeader/> : <Header/>}
      <div id = 'main'>
        <section className="major column flex">
        Dashboard

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
        }
      }
        text = 'song'
        />
      </div>


    {display ? 

        <div className = "table-wrapper">

<h2 className = 'tableHeading'>Songs</h2>
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
:
<div className = "table-wrapper">
<h2 className = 'tableHeading'>Playlists</h2>
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
  {playlist}
  </tbody>
</table>
</div>

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