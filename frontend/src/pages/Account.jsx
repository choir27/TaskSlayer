import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import UserHeader from "../components/UserHeader"
import {useContext, useEffect, useState} from "react"
import {MyContext} from "../middleware/Context"

const Account = () => {

  const UserContext = useContext(MyContext)

  const [user, setUser] = useState({})

  
  useEffect(()=>{

    const getAccount = async() =>{

      const getUser = async() => {
        let user = await UserContext
        return user
      }

      const userFromServer = await getUser()
      setUser(userFromServer)
    }

    getAccount()

  },[])

  return (
    <div>  
      <UserHeader />  
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
        
            <h2>{user[0] ? user[0].userName : "ERROR HAS OCCURED"}</h2>

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