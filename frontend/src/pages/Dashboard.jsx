import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useContext, useState, useEffect} from "react"
import Post from "../components/Post"
import {MyContext} from "../middleware/Context"

const Dashboard = () => {
  
  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})
  const [audioTracks, setAudioTracks] = useState([])
  const [accounts, setAccounts] = useState([])

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[userContext])


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


  const rows = []

// create a lookup object for the accounts array
const accountLookup = accounts.reduce((lookup, account) => {
  lookup[account._id] = {
    userName: account.userName,
    userID: account._id
  };
  return lookup;
}, {});

// iterate over the audioTracks array and retrieve user information using the lookup object
audioTracks.forEach(ele => {
  const user = accountLookup[ele.user];
  if (user) {
    rows.push(<Post text={ele.name} key={ele._id} userName={user.userName} userID={user.userID} />);
  }
});

  
  return (
    <div>
      {user? <UserHeader/> : <Header/>}
      <div id = 'main'>
        <section className="major column flex">
        Dashboard

        {rows}

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