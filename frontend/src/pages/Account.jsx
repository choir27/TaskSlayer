import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import {useContext, useEffect, useState} from "react"
import {MyContext} from "../middleware/Context"
import Post from "../components/Post"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"
import axios from "axios";

const Account = () => {

  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})
  const [audioTracks, setAudioTracks] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [choosePlaylist, setChoosePlaylist] = useState({})
  const [playlistID, setPlaylistID] = useState('')

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[user,userContext])


  useEffect(()=>{

    const getPost = async() =>{
       const postsFromServer = await getAudios()
       setAudioTracks(postsFromServer)
    }

    getPost()
  },[])

  useEffect(()=>{
    const fetchPlaylist = () => {
      fetch("http://localhost:8000/playlist")
        .then(res=>res.json())
        .then(data => {
          setPlaylist(data)
        });
      }

    fetchPlaylist()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .put(`http://localhost:8000/choosePlaylist/${choosePlaylist}`)
        .then(res=>console.log(res))
        .catch(err=>{
          console.error(err);
          return;
        })

        window.location.reload();
  }

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/deletePlaylist/${playlistID}`)
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.error(error)
        return;
      })

      axios
      .put(`http://localhost:8000/deleteCurrentPlaylist`)
      .then(res=>{
        res.json()
      })
      .then(data=>console.log(data))
      .catch(error=>{
        console.error(error)
        return;
      })


      window.location.reload();
  }


  let list = []

  playlist.forEach(ele=>{
    if(ele.user === localStorage.getItem('id')){
      list.push(
        <li className = "flex" id = "playlist" key = {ele._id}>
      <form onSubmit = {handleSubmit}>
           <input name = 'choosePlaylist' value = {ele._id} className = "hidden" readOnly = {true}></input>
      <button className = 'button large' onClick = {()=>setChoosePlaylist(ele._id)}>{ele.name}</button>
      </form>

      <form onSubmit = {handleDelete}>
        <button
          onClick = {()=>setPlaylistID(ele._id)}
         className="button small fa-solid fa-trash" type="submit"></button>
      </form>
      </li>
    )
    }
  })


  const getAudios = async() => {
    let res = await fetch("http://localhost:8000/audio")
    let data = await res.json();
    return data
  }

 


  const rows = []

  audioTracks.forEach(ele=>{
    if(ele.user === user._id){
      rows.push(<Post userName = {user.userName} userID = {ele.user} id = {ele._id} text = {ele.name} key = {ele._id}/>)
    }
})

  
  return (
    <div>  
      <UserHeader />  
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
        
        <h3>{user ? user.userName : "Error has occured, please try again later!"}</h3>

        <MusicPlayer/>

        <h2 className = 'tableHeading'>Song List</h2>

        <div className = "table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Playlist</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {rows}  
          </tbody>
        </table>
        </div>

        <ul className = "songs">
        {list}
        </ul>
          

        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account