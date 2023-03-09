import {useContext} from "react"
import HomeGuest from "./HomeGuest"
import HomeAuth from "./HomeAuth"
import {MyContext} from "../middleware/Context"

const Home = () => {

	return(
		localStorage.getItem('id') ? <HomeAuth/> : <HomeGuest/>
	)
}

export default Home

