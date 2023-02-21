import {useEffect, useState, useRef} from "react"
import {useParams} from "react-router-dom"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"

const ValidateHeader = () =>{

const [userAccounts, setUserAccounts] = useState([])
const [valid, setValid] = useState(false)


const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/api')
    
    const data = await res.json()
    return data
  }

useEffect( () => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUserAccounts(usersFromServer)
    }

    getUsers()
  }, [])


let user = useRef();
user = useParams();
let userID = useRef();

useEffect(()=>{

    const validate = (id) =>{

        if(userAccounts){
          for(let i = 0 ; i< userAccounts.length; i++){
            if(userAccounts[i]._id === id){
              return true
            }
          }
          return false
        }
        }
    let token = localStorage.getItem("token")
    userID.current = localStorage.getItem("id")
    user.current = user.id

    if(	token && (validate(user.current) || validate(userID.current))){
        setValid(true);
    }else{
        setValid(false);
    }
},[valid, userAccounts])

return(valid ? <UserHeader/> : <Header/>)

}

export default ValidateHeader