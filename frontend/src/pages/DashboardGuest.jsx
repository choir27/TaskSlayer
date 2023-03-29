import Footer from "../components/Footer"
import Header from "../components/Header"
import Button from "../components/Button"
import {MyContext} from "../middleware/Context"

import {useContext, 
        useState, 
        useEffect} from "react"

import {GetUser,
       GetAudio, 
       GetPlaylist} from "../hooks/FetchHooks"

import {Link} from "react-router-dom"
const Dashboard = () => {
  
  const userContext = useContext(MyContext)
  const [rows, setRows] = useState([])
  const [display, setDisplay] = useState(true)
  const [playlist, setPlaylist] = useState([])

  useEffect(()=>{

    GetPlaylist.then(play => {
      GetUser.then(users=>{

        const playList = [];

        play.forEach(ele=>{
          users.forEach(element=>{
            if(element._id === ele.user){
              playList.push(<tr>
                <td>{ele.name}</td>
                <td></td>
                <td></td>
                <td>{element.userName}</td>
              </tr>);
            }
          });
        });

        setPlaylist(playList);

      });
    });

    GetUser.then(users=>{
      GetAudio.then(audio=>{

      const songList = [];

        audio.forEach(song => {
          users.forEach(element =>{

            if(element._id === song.user){
              songList.push(
                <tr key = {song._id}>
                  <td>{song.name}</td>
                  <td>
                    <Link className = "button small"
                      to = "/playMusic"
                      onClick = {()=>{
                        localStorage.setItem('song', song._id)}
                      }>
                      Play
                    </Link>
                  </td>
                  <td></td>
                  <td></td>
                  <td>{element.userName}</td>
                </tr>
              );
            }

          })
        })

        setRows(songList);

      })
    })

    localStorage.setItem("display", display);

  },[display, userContext]);


  return (
    <div>
      <Header/>
      <div id = "main">
        <section className="major column flex">
        <h1 className = "flex justifyContent">Dashboard</h1>

      {/*Toggle between displaying playlists/songs*/}

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