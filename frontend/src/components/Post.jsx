import axios from "axios";
import {useContext, 
        useState, 
        useEffect} from "react"
import {MyContext} from "../middleware/Context"
import {toast} from "react-toastify"
import {Link} from "react-router-dom"
import {GetPlaylist} from "../hooks/FetchHooks"

const Post = ({ text, 
                id, 
                userName, 
                userID}) => {
  
  const userContext = useContext(MyContext);
  const [user, setUser] = useState({});
  const [playlist, setPlaylist] = useState("");
  const [songs, setSongs] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    try{
      userContext.then(data=>{
        setUser(data)});
  
      GetPlaylist.then(data=>{
        setSongs(data)});
  
      const array= []
  
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

    }catch(err){
      console.error(err);
      return;
    }
    
  },[userContext, playlist, songs])


  const trim = (str) => {
  return str.length > 35 ? 
         str.substr(0,30) 
         + "..." 
         : str;
  };

  const handleDelete = (e) => {
    try{
      e.preventDefault();

      axios
        .delete(`http://localhost:8000/deletePost/${id}`)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.error(error);
          return;
        });

      window.location.reload();

    }catch(err){
      console.error(err);
      return;
    }
   
  };

  const handleAddToPlaylist = async (e) => {
    try{
      e.preventDefault();

      const list = songs[0].songs;

      if(list){
          for(let i = 0; i < list.length; i++){
            if(list[i]._id === id){
              toast.error("Song already exists in playlist");
              return;
            };
          };
      }
      
      if(playlist !== ""){

        const formData = new URLSearchParams();
        formData.append("playlist", playlist);

        axios
          .put(`http://localhost:8000/addToPlaylist/${id}`, formData, {})
          .then(res=>{
            axios
            .put(`http://localhost:8000/choosePlaylist/${playlist}`, formData, {})
            .then(data=>{
                console.log(data);
            })
          })   
          .catch(err=>{
            console.error(err);
            return;
          })
        window.location.reload();
      }else{
        toast.error("Please Choose A Valid Option");
        return;
      };
    
    }catch(err){
      console.error(err);
      return;
    }
    
  }

  return (
    <tr>
      <td>
        {trim(text)}
      </td>

      <td>
        <Link className = "button small"
          to = "/playMusic"
          onClick = {()=>{
            localStorage.setItem('song', id)}
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
};

export default Post;