import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import UserHeader from "../components/UserHeader"
import {useContext, useEffect, useState, useRef} from "react"
import {MyContext} from "../middleware/Context"

const Account = () => {

  const userContext = useContext(MyContext)
  const currentUser = useRef({})
  const [user, setUser] = useState({})

  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[])

  userContext.then(data=>{
    currentUser.current = data
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
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account