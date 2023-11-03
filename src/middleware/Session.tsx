import {useState, useEffect} from "react"

export default function Session(){

    const [value, setValue] = useState<string| null>("");

    useEffect(()=>{
        setValue(sessionStorage.getItem("auth"))
    },[]);

    return value
}