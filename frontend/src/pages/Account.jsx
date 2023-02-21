import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import PostAudio from "../components/PostAudio"
import ValidateHeader from "../components/ValidateHeader"

const Account = ({onAdd}) => {


  return (
    <div> 
      <ValidateHeader />
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
          <ul className = 'special flex column'>
         
          </ul>

        

          <PostAudio/>

          <VoiceLinePlayer />
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account