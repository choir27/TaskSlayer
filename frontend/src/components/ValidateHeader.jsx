import {useContext} from "react"
import {MyContext} from "../App"
import Header from "../components/Header"
import UserHeader from "../components/UserHeader"

const ValidateHeader = () =>{

  const UserContext = useContext(MyContext)

return(UserContext ? console.log(UserContext) : console.log(UserContext))

}

export default ValidateHeader