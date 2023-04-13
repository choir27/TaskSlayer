import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import PlaylistSongsAccount from "../components/PlaylistSongsAccount"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"

import {useContext, 
        useEffect, 
        useState} from "react"

import {MyContext} from "../middleware/Context"
import NavPanel from "../components/NavPanel"


const Account = () => {

  const userContext = useContext(MyContext);
  const [user, setUser] = useState({});

  useEffect(()=>{
    try{
      userContext.then(data=>{
        setUser(data)
      });
    }
    catch(err){
      console.error(err);
    }
    
    }, [userContext, 
        user])

  return (
    <div id = "wrapper">  
      <NavPanel />
      <UserHeader idName = "nav" />  
        <div id = "main">
          <article className = "post">
            <section className="major column flex">
              <h1 className = "flex justifyContent">{user.userName}</h1>

              <MusicPlayer/>

              <PlaylistSongsAccount/>
              
            </section>

          </article>
        </div>

      <Footer />
        
      <div id="copyright">
        &copy; choir Design: HTML5 UP
      </div>
    
    </div>
  )
}

export default Account