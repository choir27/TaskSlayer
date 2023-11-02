import {BrowserRouter} from "react-router-dom"
import {Route, Routes} from "react-router"
import React, {Suspense, useEffect, useState} from "react"
import "react-toastify/dist/ReactToastify.css"
import {PrivateRoutes, PublicRoutes} from "./middleware/Routes"
import api from "./api/api"
import {UserContext} from "./middleware/Context"
import {GetMusic} from "./hooks/HomeHooks"
import {useStore} from "./middleware/Zustand"
import {GetPlaylist} from "./hooks/MusicHooks"

export default function App(){

    const [user, setUser] = useState();
    const setSong = useStore((state)=>state.setSong);
    const setListOfSongs = useStore((state)=>state.setListOfSongs);

    useEffect(()=>{
        if(sessionStorage.getItem("auth")){
            async function getAccount(){
                const data = await api.getAccount();
                setUser(data);
            }
            getAccount();
        }
        GetMusic((e)=>setSong(e));
        GetPlaylist((e)=>setListOfSongs(e))
    },[])


    const Account = React.lazy(()=>import("./pages/Account"));
    const Home = React.lazy(()=>import("./pages/Home"));
    const About = React.lazy(()=>import("./pages/About"));
    const Demo = React.lazy(()=>import("./pages/Demo"));
    const Auth = React.lazy(()=>import("./pages/Auth"));
    const AddAudio = React.lazy(()=>import("./pages/AddAudio"));

 return(
    <UserContext.Provider value ={user}>
        <Suspense fallback ={<h1>Loading...</h1>}>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" exact element = {<Home/>}/>
                    <Route path = "/about" exact element = {<About/>}/>
                        <Route element = {<PublicRoutes/>}>
                            <Route path = "/demo" element = {<Demo/>}/>
                            <Route path = "/auth" element = {<Auth/>}/>
                        </Route>
                        <Route element = {<PrivateRoutes/>}>
                            <Route path = "/account" element = {<Account/>}/>
                            <Route path = "/addAudio" element = {<AddAudio/>}/>
                        </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    </UserContext.Provider>
 )   
}