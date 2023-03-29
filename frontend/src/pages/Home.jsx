import HomeGuest from "./HomeGuest"
import HomeAuth from "./HomeAuth"

const Home = () => {
	return(
		localStorage.getItem("id") ? <HomeAuth/> : <HomeGuest/>
	)
}

export default Home

