import {toast} from "react-toastify"
import {useState} from 'react'

const PrivateRoutes = () => {

  const [users,setUsers] = useState([])


  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')


  const registerUser = async (user) => {
  
    const res = await fetch(`http://localhost:8000/login`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'      
      },
      body: JSON.stringify(user )
    })


  
    const data = await res.json()
    console.log(res)
    console.log(data)
    
  
    setUsers([...users, data])
    }

    const onSubmit = (e) => {
      e.preventDefault() 
    
      let errors = []
    
      if(!email){
        toast.error('Please add an email')
        errors.push('1')
      }
    
      if(!password){
        toast.error('Please add a password')
        errors.push('1')
      }
    
      if(users){
        for(let i = 0; i <users.length; i++){
          if(users[i].email === email){
              console.log('Success')
          }
        }
    }
    
    registerUser({ email, password})
    
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <button onClick = {()=>registerUser()}>Test</button>
      Account
      <form onSubmit = {onSubmit} className = 'flex column justifyContent alignItems' method="POST" action="#">
            <div className="fields">  
                <div className="field">
                    <label>Email</label>
                    <input placeholder = 'Put your email here' type="text" name="email" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder = 'Put your password here' type="password" name="password" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                </div>
            </div>
                <input className = 'button' type="submit" value="Login Here" />
            </form>

    </div>
  )
}

export default PrivateRoutes


