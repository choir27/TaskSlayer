import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import ValidateHeader from "../components/ValidateHeader"
import {useState, useEffect} from "react"

const Account = () => {
  const [userAccounts, setUserAccounts] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/api')
    
    const data = await res.json()
    return data
  }

useEffect( () => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUserAccounts(usersFromServer)
    }

    getUsers()
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