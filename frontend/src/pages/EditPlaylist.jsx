import UserHeader from "../components/UserHeader"
import Footer from "../components/Footer"
import PlaylistSong from "../components/PlaylistSong"
import {useEffect, 
        useState, 
        useContext} from "react"
import {MyContext} from "../middleware/Context"

const EditPlaylist = () => {

  const userContext = useContext(MyContext);

  const [songList, setSongList] = useState({});
  const [playlist, setPlaylist] = useState({});

  useEffect(()=>{
   const playlistID = localStorage.getItem("playlistID");
    fetch('http://localhost:8000/playlist')
      .then(res=>res.json())
      .then(data=>{
        const currentPlaylist = data.find(ele=>ele._id===playlistID);

        if(currentPlaylist){
          const list = [];

          currentPlaylist.songs.forEach(ele=>{
            userContext.then(user=>{

                list.push(<PlaylistSong 
                          userName = {user.userName} 
                          id = {ele._id} 
                          text = {ele.name} 
                          key = {ele._id}
                          />)
            })
          })

          setPlaylist(currentPlaylist);
          setSongList(list);
        }
    });

  },[userContext])

  return (
    <div>
      <UserHeader />
        <div id="main">
          <article className="post featured">
            <section className="major">
              <h1>Edit Your {playlist.name} Playlist</h1>

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

                      {songList.length ? 
                      songList : 
                        <tr>
                          <td>No Songs In This Playlist</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      }
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