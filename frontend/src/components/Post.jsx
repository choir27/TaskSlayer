import axios from "axios";
import {useContext, useState, useEffect,useCallback,useMemo} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"
import {Link, 
        useNavigate} from "react-router-dom"

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
    try{
      e.preventDefault();

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