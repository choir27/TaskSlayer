import axios from "axios"
import {useContext, useState, useEffect, useCallback, useMemo, useRef} from "react"
import {Link, useNavigate} from "react-router-dom"
import {MyContext} from "../middleware/Context"


const DashboardPlaylist = () =>{

  const userContext = useContext(MyContext);

  const [choosePlaylist, setChoosePlaylist] = useState({});
  const [playlistID, setPlaylistID] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const index = useRef({});
  const currentUser = useRef({});

  const navigate = useNavigate();

  const fetchData = useCallback(async() => {
    try{

      const { data: playlistData } = await axios.get("https://illya-site-backend-production.up.railway.app/playlist");
      const { data: userData } = await axios.get("https://illya-site-backend-production.up.railway.app/api");

      setPlaylist(playlistData);
      setUsers(userData);

    }catch(err){
      console.error(err);
    }
  },[])

  userContext.then(res=>currentUser.current.user = res)
  
  const handleSubmit = useCallback(async(e) => {
    try{
      e.preventDefault();

      axios.put(`https://illya-site-backend-production.up.railway.app/choosePlaylist/${choosePlaylist[index.current.playlist]}`)
        .then(res=>console.log(res))
        .catch(err=>{
            console.error(err);
        })
      
      navigate("/account");

    }catch(err){
      console.error(err);
    }
    
  }, [choosePlaylist, navigate]);

  //deletes playlist and removes it from the database, dashboard and account page
  const handleDelete = useCallback(async(e) => {
    e.preventDefault();
    try{
      
      axios
        .put("https://illya-site-backend-production.up.railway.app/deleteCurrentPlaylist")
        .then(data=>console.log(data))  
        .catch(error=>{
          console.error(error);
          return;
        });


      axios
        .delete(`https://illya-site-backend-production.up.railway.app/deletePlaylist/${playlistID}`)
        .then(res=>{
          console.log(res)
          if(res){
            window.location.reload();
          }
        })
        .catch(error=>{
          console.error(error);
          return;
        });
              
    }catch(err){
      console.error(err);
    }

  },[playlistID]);

  useEffect(()=>{
    fetchData();
  },[fetchData])

  //returns a memoized function that grabs all ids of posted playlists
  const getPlaylistID = useCallback(async()=> setChoosePlaylist(playlist.map(ele=>ele._id)), [playlist]);

  //returns a memoized value returned from the memoized getPlaylistID
  useMemo(getPlaylistID, [getPlaylistID]);

  //pairs song post to userName that posted it
  const userMap = useMemo(() => {
    const map = {};
    users.forEach(element => map[element._id] = element.userName);
    return map;
  }, [users]);
  
  //creates table data for each playlist created
  const mappedPlaylists = useMemo(() => {

    const result = [];

    playlist.forEach((ele,i) => {
      if(currentUser.current.user){

        const userName = userMap[ele.user];

        result.push(
          <tr key={ele._id}>
            <td>
              <form onSubmit={handleSubmit}>
                <button
                  className="button"
                  onClick = {()=>index.current.playlist = i}
                >
                  {ele.name}
                </button>
              </form>
            </td>
              {currentUser.current.user._id === ele.user ? (
            <td>
              <Link
                to={`/editPlaylist`}
                onClick={localStorage.setItem("playlistID", ele._id)}
                className="fa-solid small fa-pen-to-square button"
              ></Link>
            </td>
              ) : (
            <td></td>
          )}
          {currentUser.current.user._id === ele.user ? (
            <td>
              <form onSubmit={handleDelete}>
                <button
                  onClick={setPlaylistID(ele._id)}
                  className="button small fa-solid fa-trash"
                  type="submit"
                ></button>
              </form>
            </td>
          ) : (
            <td></td>
          )}
          <td>{userName}</td>
          </tr>
        );
      }
    });

    return result;
  }, [userMap, setPlaylistID, handleDelete, handleSubmit, playlist]);
  

  useEffect(() => setList(mappedPlaylists), [mappedPlaylists]);

return(
  <div className = "table-wrapper">
    <h2 className = "tableHeading">Playlists</h2>

    <table>
      <thead>
        <tr>
          <th>Playlist Name</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {list}  
      </tbody>
    </table>
  </div>
)

}

export default DashboardPlaylist

