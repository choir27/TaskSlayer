import {createContext, useState, useEffect} from "react"
import api from "../api/api"

export const UserContext = createContext();

export default function Context({children}){
    const [user, setUser] = useState();

    useEffect(()=>{
        async function getAccount(){
            const data = await api.getAccount();
            setUser(data);
        }  
    
        if(sessionStorage.getItem("auth")){
            getAccount();
        }
    
    },[])
   

    return(
        <UserContext.Provider value = {user}>
            {children}
        </UserContext.Provider>
    )
}