import axios from "axios"
import {useContext, useState, useEffect} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"

const PostPlaylist = () => {

    const userContext = useContext(MyContext)
    const [user, setUser] = useState({})
    const [playlistName, setPlaylistName] = useState("")

    useEffect(()=>{
        const users = async() =>{
            let userData = await userContext;
            setUser(userData)
          }
        users();
    },[userContext])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(playlistName){
            const formData = new URLSearchParams()
            formData.append("user", user._id)
            formData.append("playlistName", playlistName)
                axios
                    .post("http://localhost:8000/createPlaylist", formData, {})
                    .then(res=>console.log(res))
                    .then(data=>{
                        console.log(data)
                    })
                    .catch(err=>{
                        console.error(err)
                        return;
                    })
            window.location.reload()        
        }else{
            toast.error("Please input a valid playlist name")
            return;
        }
    
        
    }

    return(
        <form onSubmit = {handleSubmit}>
               <input
                id = "user"
                type = "text"
                name = "user"
                className = "hidden"
                disabled
                value = {user._id || ""}
                />
            <input 
            type = "text"
            name = 'playlistName'
            value = {playlistName || ""}
            onChange = {(e)=>{
                setPlaylistName(e.target.value)
            }}
            
            />
            <button className="fa-solid fa-list button large"
            type = "submit">
            </button>
        </form>
   
    )
}

export default PostPlaylist