import {Outlet, 
        Navigate} from "react-router-dom"

const PublicRoutes = () => {

return(
  localStorage.getItem("id")? <Navigate replace to = "/"/> : <Outlet/> 
)

};

export default PublicRoutes


