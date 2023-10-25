import {Outlet, Navigate} from "react-router-dom"

export function PrivateRoutes(){
    return(
        sessionStorage.getItem("auth") ? <Outlet/> : <Navigate to = "/"/>
    )
}

export function PublicRoutes(){
    return(
        sessionStorage.getItem("auth") ? <Navigate to = "/"/> : <Outlet/>
    )
}