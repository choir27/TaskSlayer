import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import {useContext, useEffect, useState} from "react"
import {MyContext} from "../middleware/Context"
import Post from "../components/Post"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"

const Account = () => {

  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})
  const [audioTracks, setAudioTracks] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[user])


  useEffect(()=>{

    const getPost = async() =>{
       const postsFromServer = await getAudios()
       setAudioTracks(postsFromServer)
    }

    getPost()
  },[])

  const getAudios = async() => {
    let res = await fetch("http://localhost:8000/audio")
    let data = await res.json();
    return data
  }


  const rows = []

  audioTracks.forEach(ele=>{
    if(ele.user === user._id){
      rows.push(<Post userID = {ele.user} id = {ele._id} text = {ele.name} key = {ele._id}/>)
    }
})
  


  return (
    <div>  
      <UserHeader />  
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
        
        <h2>{user ? user.userName : "Error has occured, please try again later!"}</h2>

        <MusicPlayer/>

        <ul className = "songs">
        {rows}  
        </ul>
          
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account