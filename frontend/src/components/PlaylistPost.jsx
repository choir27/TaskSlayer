import axios from "axios"
import {useContext,useState, useEffect} from "react"
import {GetUser,GetPlaylist} from "../hooks/FetchHooks"
import {Link} from "react-router-dom"
import {MyContext} from "../middleware/Context"


const PlaylistPost = () =>{

const userContext = useContext(MyContext)

const [choosePlaylist, setChoosePlaylist] = useState({})
const [playlistID, setPlaylistID] = useState('')
const [playlist, setPlaylist] = useState([])
const [list, setList] = useState([])


useEffect(()=>{

const handleSubmit = e => {
    e.preventDefault();
    axios
        .put(`http://localhost:8000/choosePlaylist/${choosePlaylist}`)
        .then(res=>{
          if(res){
            console.log(res);
            window.location.reload();
          }
        })
        .catch(err=>{
          console.error(err);
          return;
        })
}

const handleDelete = e => {
    e.preventDefault();
    
    axios
      .delete(`http://localhost:8000/deletePlaylist/${playlistID}`)
      .catch(error=>{
        console.error(error)
        return;
      })

    axios
      .put(`http://localhost:8000/deleteCurrentPlaylist`)
      .then(res=>{
        res.json()
      })
      .then(data=>{
        if(data){
          console.log(data);
          window.location.reload();
        }
      })
      .catch(error=>{
        console.error(error)
        return;
      })

    }


  GetPlaylist.then(data=>{
    GetUser.then(user=>{
        userContext.then(currentUser=>{
      setPlaylist(data)
      let playlists = []
          data.forEach(ele=>{
            user.forEach(element=>{
                if(element._id === ele.user){
                  playlists.push(
                      <tr key = {ele._id}>
                          <td>
                              <form onSubmit = {handleSubmit}>
                                  <input name = 'choosePlaylist' value = {ele._id} className = "hidden" readOnly = {true}></input>
                                  <button className = 'button' onClick = {()=>setChoosePlaylist(ele._id)}>{ele.name}</button>
                              </form>
                          </td>
                    
                    {currentUser._id === ele.user ? 
                          <td>
                              <input name = "editPlaylist" value = {ele._id} className = "hidden" readOnly = {true}></input>
                              <Link to = {`/editPlaylist`}
                              onClick = {()=>localStorage.setItem('playlistID', ele._id)} 
                              className = "fa-solid small fa-pen-to-square button"></Link>
                          </td>
                :
                <td></td>    
                     }
                    {currentUser._id === ele.user ? 
                          <td>
                              <form onSubmit = {handleDelete}>
                                  <button
                                      onClick = {()=>{
                                      setPlaylistID(ele._id)
                                      }}
                                      className="button small fa-solid fa-trash" 
                                      type="submit">    
                                  </button>
                              </form>
                          </td>
                          :
                          <td></td>
                                    }
                          
                         <td>
                            {element._id === ele.user ? element.userName : ""}
                          </td>
                      </tr>
                  )
                    }
                })
          })
          setList(playlists)
        })
        })
  })

}, [playlist, playlistID, choosePlaylist, userContext])


return(
    <div className = "table-wrapper">
<h2 className = 'tableHeading'>Playlists</h2>

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




export default PlaylistPost