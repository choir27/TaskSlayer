import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import UserHeader from "../components/UserHeader"
import {useContext, useEffect, useState, useRef} from "react"
import {MyContext} from "../middleware/Context"
import Post from "../components/Post"

const Account = () => {

  const userContext = useContext(MyContext)
  const currentUser = useRef({})
  const [user, setUser] = useState({})
  const [audioTracks, setAudioTracks] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[])

  userContext.then(data=>{
    currentUser.current = data
  })

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

  const data = []

  audioTracks.forEach(ele=>{
    if(ele.user === user._id){
        data.push({audio: ele.audio,id: ele._id})
    }
})
  

  const rows = []

  data.forEach(ele=>{
      rows.push(<Post text = {ele.audio} key = {ele.id}/>)
  })


  return (
    <div>  
      <UserHeader />  
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
        
        <h2>{currentUser ? currentUser.current.userName : "Error has occured, please try again later!"}</h2>

        <div id = 'audio'>
          <VoiceLinePlayer />
          </div>


          {rows}
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account