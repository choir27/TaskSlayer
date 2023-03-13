import {Outlet, Navigate} from "react-router-dom"
import {MyContext} from "../middleware/Context"
import {useContext} from "react"

const PrivateRoutes = () => {

  const userContext = useContext(MyContext)

return(
  userContext? <Outlet/> : <Navigate to = "/"/>
)

}

export default PrivateRoutes


