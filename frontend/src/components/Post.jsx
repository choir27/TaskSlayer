import axios from "axios";
import {useContext, 
        useState, 
        useEffect,
        useCallback} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"
import {Link, useNavigate} from "react-router-dom"

const Post = ({ text, 
                id, 
                userName, 
                userID}) => {
  
  const userContext = useContext(MyContext);
  const [user, setUser] = useState({});
  const [playlist, setPlaylist] = useState("");
  const [songs, setSongs] = useState([]);
  const [rows, setRows] = useState([]);
  const [table, setTable] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

    try{
      userContext.then(data=>{
        setUser(data);
      });
  
      fetch("https://illya-site-backend-production.up.railway.app/playlist")
        .then(res=>res.json())
        .then(data=>{
          setSongs(data);
      });
  
      const array= [];
  
      if(songs){
        songs.forEach((ele)=>{
          if(ele.user === localStorage.getItem("id")){
            array.push(<option 
                        value = {ele._id} 
                        key = {ele._id}
                        >
                          {ele.name}
                        </option>
                      )
          }
       })
      }
  
      setRows(array);


       setTable(
    <tr>
      <td>
        {text}
      </td>

      <td>
        <Link className = "button small"
          to = "/playMusic"
          onClick = {()=>{
            localStorage.setItem("song", id)}
          }>
            Play
        </Link>
      </td>

      <td>
        <form onSubmit={handleAddToPlaylist}>
          <select name = "playlist"
            onChange = {(e)=>{
            setPlaylist(e.target.value)}}
          >
            <option value = ''></option>
            {rows}
          </select>
          <button className="fa-solid fa-plus button small" type = "submit"/>
        </form>

      </td>

      <td>
        <form onSubmit={handleDelete}>
          {user._id === userID ?
            <button
            className="button small fa-solid fa-trash" 
            type="submit"
            />
          : ""
          }
        </form>
      </td>

      <td>
        {userName}
      </td>
    </tr>
    );

    }catch(err){
      console.error(err);
      return;
    }

   
    
  },[userContext, playlist, songs])


  const handleDelete = useCallback((e) => {
    try{
      e.preventDefault();

      axios
        .delete(`https://illya-site-backend-production.up.railway.app/deletePost/${id}`)
        .then(res=>console.log(res))
        .catch((error) => {
          console.error(error);
          return;
        });

    }catch(err){
      console.error(err);
      return;
    }
   
  }, [id]);

  const handleAddToPlaylist = useCallback(async (e) => {
    try{
      e.preventDefault();

      const list = songs.find(ele=>ele._id === playlist);

      for(let i = 0; i < list.length; i++){
        if(list.songs[i]._id === id){
          toast.error("Song already exists in playlist");
          return;
        };
      };
      
      if(playlist !== ""){

        const formData = new URLSearchParams();
        formData.append("playlist", playlist);

        axios
          .put(`https://illya-site-backend-production.up.railway.app/addToPlaylist/${id}`, formData, {})
          .then(res=>console.log(res))   
          .catch(err=>{
            console.error(err);
            return;
          })

        axios
          .put(`https://illya-site-backend-production.up.railway.app/choosePlaylist/${playlist}`, formData, {})
          .then(data=>{
              console.log(data);
          })

        navigate("/editPlaylist")
      }else{
        toast.error("Please Choose A Valid Option");
        return;
      };
    
    }catch(err){
      console.error(err);
      return;
    }
    
  }, [playlist, songs, id, navigate]);

  return table
};

export default Post;