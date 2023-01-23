import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import {useNavigate} from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()

  const googleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
  <>
      <GoogleLogin
      onSuccess={credentialResponse=>{
        const detail = jwt_decode(credentialResponse.credential)
        console.log(credentialResponse)
        console.log(detail)
        navigate('/account')
      }}
      theme='filled_black'
      shape='pill'
      onError={()=>{
        console.log('Login Failed')
      }}/>

<div 
    id="g_id_onload"
     data-client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
     data-login_uri="http://localhost:3000/register"
     data-auto_select="true"
     data-your_own_param_1_to_login="Richard"
     data-your_own_param_2_to_login="Choi"></div>

<button className="g_id_signout button large" onClick = {()=>googleLogout()}>Sign Out</button>

        </>
  )
}

export default Register