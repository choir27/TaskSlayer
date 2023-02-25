import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import ValidateHeader from "../components/ValidateHeader"
import {useState, useEffect, useContext} from "react"
import {MyContext} from "../App"
const Account = ({children}) => {
  const [userAccounts, setUserAccounts] = useState([])
  const [currentUser, setCurrentUser] = useState({})


  const UserContext = useContext(MyContext)
  {console.log(UserContext)}
  



useEffect( () => {

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/api')
    const data = await res.json()
    const usersFromServer = await data
    setUserAccounts(usersFromServer)
  }

    fetchUsers()
  }, [])

useEffect(()=>{
  if(userAccounts)
  {
    setCurrentUser(userAccounts.find(ele=>ele._id === localStorage.getItem('id')))
  }
}, [currentUser, userAccounts])


  return (
    <div>  
      <ValidateHeader />  
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
        
            <h2>{currentUser ? currentUser.userName : "ERROR HAS OCCURED"}</h2>

        <div id = 'audio'>
          <VoiceLinePlayer />
          </div>
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account