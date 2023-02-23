import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import ValidateHeader from "../components/ValidateHeader"
import Button from "../components/Button"

const Account = ({onAdd}) => {


  return (
    <div> 
      <ValidateHeader />
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
          <ul className = 'special flex column'>
         
          </ul>

          <Button 
            cname = 'button'
            size = 'large'
            text = 'add Audio'
            domain = {`/${localStorage.getItem("id")}/addAudio`}

            />

          <VoiceLinePlayer />
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account