import {Outlet, Navigate} from "react-router-dom"

const Register_LoginRoutes = () => {

const token = localStorage.getItem("token");

return(
  token? <Navigate to = "/"/> : <Outlet/>
)

}

export default Register_LoginRoutes


