import {Outlet, Navigate} from "react-router-dom"

export function PrivateRoutes(){
    return(
        localStorage.getItem("auth") ? <Outlet/> : <Navigate to = "/"/>
    )
}

export function PublicRoutes(){
    return(
        localStorage.getItem("auth") ? <Navigate to = "/"/> : <Outlet/>
    )
}