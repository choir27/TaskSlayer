import UserHeader from "../components/UserHeader"
import Footer from "../components/Footer"
import {useParams} from "react-router-dom"
import {useEffect, useState, useContext} from "react"
import { createBrowserHistory } from "history"
import PlaylistSong from "../components/PlaylistSong"
import {MyContext} from "../middleware/Context"

const EditPlaylist = () => {

  const url = useParams();
  const history = createBrowserHistory();
  const userContext = useContext(MyContext)

  const [params, setParams] = useState("") 
  const [songList, setSongList] = useState({})

  localStorage.setItem('playlistID', url.id);

  useEffect(()=>{
    const playlistID = localStorage.getItem("playlistID")

    if(playlistID){
    history.push(playlistID);
    setParams(playlistID);
    fetch('http://localhost:8000/playlist')
      .then(res=>res.json())
      .then(data=>{
        const playlist = data.find(ele=>ele._id===playlistID)
        if(playlist){
          let list = []
          playlist.songs.forEach(ele=>{
            userContext.then(user=>{
                list.push(<PlaylistSong userName = {user.userName} id = {ele._id} userID = {ele.user} text = {ele.name} key = {ele._id}/>)
              })
            })
          setSongList(list)
        }
    })
    }
  },[])

  return (
    <div>
        <UserHeader />
        <div id="main">
        <article className="post featured">
          <section className="major">
                <h1>Edit Playlist</h1>

                <div className = "table-wrapper">

<h2 className = 'tableHeading'>Songs</h2>

<table>
  <thead>
    <tr>
      <th>Song Name</th>
      <th>Delete</th>
      <th>User</th>
    </tr>
  </thead>
  <tbody>
  {songList.length ? songList : 
  <tr>
    <td>No Songs In This Playlist</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>}
  </tbody>
</table>
</div>
          </section>
        </article>
        </div>
        <Footer />

        <div id="copyright">
&copy; choir Design: HTML5 UP
        </div>
    </div>
  )
}

export default EditPlaylist