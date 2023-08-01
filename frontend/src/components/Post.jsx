import axios from "axios";
import {useState, useCallback,useMemo} from "react"

const Post = ({ text, 
                id, 
                userName, 
                userID}) => {
  
  const [table, setTable] = useState([]);

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
    <form onSubmit={handleDelete}>
      {localStorage.getItem("id") === userID ?
        <button
        className="button fa-trash fa-solid"
        type="submit"
        ></button>
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
  text,
  userName,
  userID,
  handleDelete])

  return table
};

export default Post;