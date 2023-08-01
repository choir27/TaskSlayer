import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"

import {useContext, 
        useEffect, 
        useState} from "react"

import {MyContext} from "../middleware/Context"
import NavPanel from "../components/NavPanel"

import MusicPlayer from "../components/MusicPlayer.tsx"

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
    <main className = "column flex">
      <NavPanel />
      <UserHeader/>  

        <section id = "account" className = "main">
        <MusicPlayer/>
 
        </section>

        <Footer/>

    </main>
  )
}

export default Account