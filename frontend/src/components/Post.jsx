import axios from "axios";
import {useContext, useState, useEffect,useCallback,useMemo} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

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

  const fetchData = useCallback(async () => {
    try{
      const { data: playlistData } = await axios.get(
        "https://illya-site-backend-production.up.railway.app/playlist"
      );
      setSongs(playlistData);

      const currentUserData = await userContext;
      setUser(currentUserData);

    }catch(err){
      console.error(err);
    }
  },[userContext])

  useEffect(()=>{
    fetchData();
  },[fetchData]);

  const handleDelete = useCallback((e) => {
    e.preventDefault();
    try{
      axios
        .delete(`https://illya-site-backend-production.up.railway.app/deletePost/${id}`)
        .then(res=>{
          console.log(res)
          window.location.reload();
        })
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
    e.preventDefault();
    try{
      if(songs) {
        for(let index = 0; index < songs.length; index++){
          if (songs[index].songs.some(song => song._id === id)) {
            toast.error("Song already exists in playlist");
            return;
          }
        }

      if(playlist !== "" && id){

        const formData = new URLSearchParams();
        formData.append("playlist", playlist);

        await axios.put(`https://illya-site-backend-production.up.railway.app/addToPlaylist/${id}`, formData, {})
          .then(res=>{
            console.log(res)
            navigate("/editPlaylist")
          })   
          .catch(err=>{
            console.error(err);
            return;
          })

      }else{
        toast.error("Please Choose A Valid Option");
        return;
      };
      }

    }catch(err){
      console.error(err);
      return;
    }
    
  }, [playlist, songs, id, navigate]);

  const memoizedOptions = useCallback(()=>{
    const array = [];

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

    return array;
  },[songs])


  useMemo(() => {
    setRows(memoizedOptions());
  }, [memoizedOptions]);
  
  useMemo(()=>{
   setTable(
<tr>
  <td>
    {text}
  </td>

  <td>
    <button className = "button small"
      onClick = {(e)=>{
        e.preventDefault();
        localStorage.setItem("song", id);
        window.location.reload();}
      }>
        Play
    </button>
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
      <button className="fa-solid fa-plus button small" type = "submit" onClick = {()=>localStorage.setItem("playlistID",playlist)}/>
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
},[id,
  rows,
  text,
  userName,
  user._id,
  userID,
  playlist,
  handleAddToPlaylist,
  handleDelete])

  return table
};

export default Post;