import Header from "../components/Header"
import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import {useState, useEffect} from "react"
import { toast } from "react-toastify"
import {useNavigate} from "react-router-dom"


const Account = ({onAdd}) => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [audio, setAudio] = useState('');

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/api')
    
    // const res = await fetch('https://task-tracker-api-v1eh.onrender.com/api')
    const data = await res.json()
    return data
  }

  
  useEffect( () => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const audioSplit = audio.split('.')
    if(audioSplit[audioSplit.length-1] !== 'mp3' && audioSplit[audioSplit.length-1] !== 'ogg'){
      toast.error("Please Upload Proper Audio File");
      return;
    }

    onAdd({audio})

    setAudio('')

    navigate('/')
    
  }

  
  const currentUser = users.find((ele) => ele.email === localStorage.getItem('email'))

  return (
    <div> 
      <Header />
          <div id = 'main'>
            <article className = 'post'>
        <section className="major column flex">
          <ul className = 'special flex column'>
            <li>{currentUser ? currentUser.email : "No email found"}</li>
            <li>{currentUser ? currentUser.name : "No name found"}</li>
            <li>{currentUser ? currentUser.userName : "No username found"}</li>
          </ul>

          <form onSubmit = {handleSubmit}>
            <div className = 'field'>
              <label htmlFor = 'audio' className = 'button'>Add Audio</label>
              <input id ='audio' className = 'hidden' type = "file" name = 'audio' value = {audio} onChange = {(e)=>setAudio(e.target.value)}></input>
            </div>
            <input className = 'button large' type="submit" value="Upload File" onClick = {(e)=>handleSubmit(e)}/>
          </form>

          <VoiceLinePlayer />
        </section>
        </article>
          </div>
        <Footer />
    
    </div>
  )
}

export default Account