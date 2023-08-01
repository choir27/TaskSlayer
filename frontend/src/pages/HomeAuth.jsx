import Footer from "../components/Footer"
import {MyContext} from "../middleware/Context"
import {useContext, 
		useEffect, 
		useState} from "react"
import UserHeader from "../components/UserHeader"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"
import DashboardAuth from "./DashboardAuth"
import NavPanel from "../components/NavPanel"

const HomeAuth = () => {

	const userContext = useContext(MyContext);

	const [user,setUser] = useState({});

	useEffect(()=>{
    	userContext.then(data=>{
    	  setUser(data)
    	})
  	},[user, userContext])


  return (
	<main className = "column flex">
		<NavPanel />
		<UserHeader/>

		<section id = "home" className = "main">

			<section>
				<MusicPlayer/>
				<DashboardAuth/>
			</section>
		</section>

		
		<Footer/>
	</main>
  )
}

export default HomeAuth