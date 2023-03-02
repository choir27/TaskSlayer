import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import UserHeader from "../components/UserHeader"
import {useContext} from "react"
import {MyContext} from "../App"

const Account = () => {

  const UserContext = useContext(MyContext)

  return (
    <div>  
      <UserHeader />  
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
        
            <h2>{UserContext._id ? UserContext.userName : "ERROR HAS OCCURED"}</h2>

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