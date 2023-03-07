import {useContext, useState, useEffect} from "react"
import {MyContext} from "../App"
import HomeGuest from "./HomeGuest"
import HomeAuth from "./HomeAuth"

const Home = () => {

	const [user,setUser] = useState(false)

	const userContext = useContext(MyContext)

	console.log(userContext)

	useEffect(()=>{
		userContext ?  <HomeAuth/> :  <HomeAuth/> 
	}, [user])
	
	return(
		userContext ? <HomeAuth/> : <HomeGuest/>
	)
}

export default Home

