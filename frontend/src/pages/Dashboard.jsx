import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useContext, useState, useEffect} from "react"
import Post from "../components/Post"
import {MyContext} from "../middleware/Context"
import {GetUser} from "../components/AccountHooks"

const Dashboard = () => {
  
  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})
  const [audioTracks, setAudioTracks] = useState([])
  const [accounts, setAccounts] = useState([])
  const [rows, setRows] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })

    GetUser.then(data=>{

      const users = data.map(ele=>[ele._id,ele.userName]);
      const list = []

        audioTracks.forEach(ele => {
          users.forEach(element =>{
            if(element[0] === ele.user){
              list.push(<Post id = {ele._id} text={ele.name} key={ele._id} userName={element[1]} userID={element[0]} />);
            }
          })
        })
        setRows(list)

      })

      },[audioTracks])




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

  useEffect(()=>{
    const fetchUsers = () =>{
      try{
        fetch("http://localhost:8000/api")
          .then(res=>res.json())
          .then(data=>{
          setAccounts(data)
        })
      }catch(err){
        console.error(err)
      } 
    }
    fetchUsers()

  },[])





  
  return (
    <div>
      {user? <UserHeader/> : <Header/>}
      <div id = 'main'>
        <section className="major column flex">
        Dashboard


        <div className = "table-wrapper">

<h2 className = 'tableHeading'>Songs</h2>

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