import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useContext, useState, useEffect, useRef} from "react"
import {MyContext} from "../App"
import Post from "../components/Post"
const Dashboard = () => {

  const UserContext = useContext(MyContext)

  const [audioTracks, setAudioTracks] = useState([])
  const [user, setUser] = useState({})

  useEffect(()=>{

    const getAccount = async() =>{
      const userFromServer = await getUser()
      setUser(userFromServer)
    }

    getAccount()

  },[])

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

  const getUser = async() => {
    let user = await UserContext
    return user
  }

  const data = []

  audioTracks.forEach(ele=>{
    if(ele.user === user[0]._id){
        data.push({audio: ele.audio,id: ele._id})
    }
})
  

  const rows = []

  data.forEach(ele=>{
      rows.push(<Post text = {ele.audio} key = {ele.id}/>)
  })

  console.log(data)
  
  return (
    <div>
      {UserContext ? <UserHeader/> : <Header/>}
      <div id = 'main'>
        <section className="major column flex">
        Dashboard

        {rows}


        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard