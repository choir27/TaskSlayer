import { useNavigate } from "react-router-dom";
import axios from "axios";

const Post = ({ text, id }) => {
  
  const navigate = useNavigate();

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
        <button
        onClick = {()=>window.location.reload()}
         className="fa-solid fa-trash" type="submit"></button>
      </form>
    </li>
  );
};

export default Post;