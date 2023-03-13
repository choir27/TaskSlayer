import axios from "axios";
import {useContext, useState, useEffect} from "react"
import {MyContext} from "../middleware/Context"

const Post = ({ text, id, userName, userID }) => {
  
  const userContext = useContext(MyContext)
  const [user, setUser] = useState({})


  useEffect(()=>{
    userContext.then(data=>{
      setUser(data)
    })
  },[])

 const trim = (str) => {
    if (str.length > 15) {
      return str.substr(0, 30) + "...";
    } else {
      return str;
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/deletePost/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
        return;
      });
  };


  return (
    <li className="post">
    {trim(text)}
      <form onSubmit={handleDelete}>
        {user._id == userID ?
        <button
        onClick = {()=>window.location.reload()}
         className="button small fa-solid fa-trash" type="submit"></button>
         : ""
         }
    {userName}
      </form>
    </li>
  );
};

export default Post;