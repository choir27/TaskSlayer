import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import {useContext, useEffect, useState, useRef} from "react"
import {MyContext} from "../middleware/Context"
import Post from "../components/Post"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"

const Account = () => {

  const userContext = useContext(MyContext)
  const currentUser = useRef({})
  const [user, setUser] = useState({})
  const [audioTracks, setAudioTracks] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[user])

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

  const hide = (arr) => {
      if(arr.length > 3){

      }
  }
  
  

  const rows = []

  audioTracks.forEach(ele=>{
    if(ele.user === user._id){
      rows.push(<Post cName = {hide(rows)} text = {ele.name} key = {ele._id}/>)
    }
})
  


  return (
    <div>  
      <UserHeader />  
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
        
        <h2>{currentUser ? currentUser.current.userName : "Error has occured, please try again later!"}</h2>

        <MusicPlayer/>

          {rows}
          
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account