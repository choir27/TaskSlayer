import UserHeader from "../components/UserHeader"
import Footer from "../components/Footer"
import PlaylistSong from "../components/PlaylistSong"
import { useEffect, useState} from "react"
import NavPanel from "../components/NavPanel"

const EditPlaylist = () => {
  const [list, setList] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const [table, setTable] = useState([]);

  useEffect(() => {
    const playlistID = localStorage.getItem("playlistID");

      try {
        const songList = [];

        fetch("https://illya-site-backend-production.up.railway.app/playlist")
          .then(res=>res.json())
          .then(data=>{            

            const currentPlaylist = data.find(ele => ele._id === playlistID);
            setPlaylist(currentPlaylist);
            if (currentPlaylist) {

              currentPlaylist.songs.forEach(song =>{
                songList.push( <PlaylistSong
                  key={song._id}
                  userName={song.userName}
                  id={song._id}
                  text={song.name}
                />
                );
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
            );

            };
        
      })
      }catch (error) {
        console.log(error);
      }

  }, [list]);


  return (
    <div id = "wrapper">
      <NavPanel/>
      <UserHeader idName = "nav" />
      <div id="main">
        <article className="post featured">
          <section className="major">
            <h1>Edit Your {playlist.name} Playlist</h1>


          </section>
        </article>
      </div>

      <Footer />
      <div id="copyright">
        K-pop Wired &copy; 2023. All rights are reserved
      </div>
      
    </div>
  )
}

export default EditPlaylist
