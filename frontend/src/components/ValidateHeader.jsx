import {useContext} from "react"
import {MyContext} from "../App"
import Header from "../components/Header"
import UserHeader from "../components/UserHeader"

const ValidateHeader = () =>{

  const UserContext = useContext(MyContext)

return(UserContext ? <UserHeader/> : <Header/>)

}

export default ValidateHeader