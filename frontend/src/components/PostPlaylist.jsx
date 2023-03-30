import axios from "axios"
import {useContext, 
        useState, 
        useEffect} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"

const PostPlaylist = () => {

    const userContext = useContext(MyContext);
    const [user, setUser] = useState({});
    const [playlistName, setPlaylistName] = useState("");

    useEffect(()=>{
        try{
            userContext.then(userData=>{
                setUser(userData)
            });
        }catch(err){
            console.error(err);
            return;
        }

    },[userContext]);


    const handleSubmit = (e) => {
        try{
            e.preventDefault();

            if(playlistName){
            const formData = new URLSearchParams();
            formData.append("user", user._id);
            formData.append("playlistName", playlistName);

                axios
                    .post("http://localhost:8000/createPlaylist", formData, {})
                    .then(res=>{
                        if(res){
                            console.log(res);
                            window.location.reload();
                          }
                    })
                    .catch(err=>{
                        console.error(err)
                        return;
                    })
            }else{
                toast.error("Please input a valid playlist name")
                return;
            }
        }catch(err){
            console.error(err);
            return;
        }
        
    }

    return(
        
        <form 
        onSubmit = {handleSubmit} 
        className = "flex"
        >
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
            name = "playlistName"
            value = {playlistName || ""}
            onChange = {(e)=>{
                setPlaylistName(e.target.value)
            }}
            />

            <button className="fa-solid fa-list button large"
            type = "submit">
                Create Playlist
            </button>
        </form>
   
    )
}

export default PostPlaylist