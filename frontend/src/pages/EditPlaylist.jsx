import UserHeader from "../components/UserHeader"
import Footer from "../components/Footer"
import PlaylistSong from "../components/PlaylistSong"
import { useEffect, useState, useContext } from "react"
import { MyContext } from "../middleware/Context"

const EditPlaylist = () => {
  const userContext = useContext(MyContext);
  const [list, setList] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const [table, setTable] = useState([]);

  useEffect(() => {
    const playlistID = localStorage.getItem("playlistID");

    async function fetchData() {
      try {
        const songList = [];

        fetch("https://illya-site-backend-production.up.railway.app/playlist")
          .then(res=>res.json())
          .then(data=>{

        const currentPlaylist = data.find(ele => ele._id === playlistID);
        setPlaylist(currentPlaylist)
    

        if (currentPlaylist) {
          currentPlaylist.songs.forEach(song =>{
            songList.push( <PlaylistSong
              userName={song.userName}
              id={song._id}
              text={song.name}
              key={song._id}
            />
            )
          });

          setList(songList);

          setTable(
          <div className="table-wrapper">
              <h2 className='tableHeading'>Songs</h2>

              <table>
                <thead>
                  <tr>
                    <th>Song Name</th>
                    <th>Delete</th>
                    <th>User</th>
                  </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
              </table>
            </div>
          )
          }
        
      })
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [userContext, list]);

  return (
    <div>
      <UserHeader />
      <div id="main">
        <article className="post featured">
          <section className="major">
            <h1>Edit Your {playlist.name} Playlist</h1>

            {table}
            
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
