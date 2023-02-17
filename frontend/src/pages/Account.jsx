import Header from "../components/Header"
import Footer from "../components/Footer"
import VoiceLinePlayer from "../components/VoiceLinePlayer"
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import PostAudio from "../components/PostAudio"

const Account = ({onAdd}) => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [file, setFile] = useState('');

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/api')
    
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

  useEffect(()=>{
    setFile(file);
  },[file])


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    onAdd({file})

    setFile('')

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

          <PostAudio/>

          <form onSubmit = {handleSubmit} encType="multipart/form-data" >
            <div className = 'field'>
              <label htmlFor = 'file' className = 'button'>Add Audio</label>
              <input id ='file' filename = {file} className = 'hidden' type = "file" name = 'file' value = {file} onChange = {(e)=>setFile(e.target.value)}></input>
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