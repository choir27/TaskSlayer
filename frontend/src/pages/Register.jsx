import Header from "../components/Header"
import Footer from "../components/Footer";
import Button from "../components/Button"
import {useState} from 'react'
const Register = ( {onAdd} ) => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    let errors = []

    if(!name){
        alert('Please add your name')
        errors.push('1')
    }
    
    if(!email){
      alert('Please add your email')
      errors.push('1')
    }


    const mail = email.split('@')[0]
    const symbols = ["!", "#", "$", "%" ,"&", " ' " , "*", "+" , "-", "/", "=" , "?", "^", "_", " ` " , " {", "|" , "\\" , "\"", "(" , ")" ,  "," , ":" , ";" , "<" ,">" , "@", "[" ,"]"]
    if(symbols.includes(mail[0]) || symbols.includes(mail[mail.length-1])){
      alert("Symbols cannot be placed as the first or last character for the first part of your email before the \"@\" symbol" )
    }

    if(!password){
      alert('Please add a password')
      errors.push('1')
    }

    if(!confirmPassword){
      alert('Please confirm your password')
      errors.push('1')
    }

    if(password !== confirmPassword){
      alert("Passwords do not match, please try again")
      errors.push('1')
    }

    if(password.length < 8 || confirmPassword < 8){
      alert('Password needs to be at least 8 characters long')
      errors.push('1')
    }

    if(errors.length > 0){
      return 'Error'
    }


    
    onAdd({ name, email, password, confirmPassword})


    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
}

  return (
   <div>
      <Header/>
      <div id = 'main'>
        <article className = 'post' id = 'account'>
          <section className="major column flex">
            <h1 className = 'flex justifyContent'>Register Account</h1>

            <form className = 'flex column justifyContent alignItems' onSubmit = {onSubmit} >
            <div className="fields">
               
                <div className="field">
                    <label>Name</label>
                    <input type="text" name  ='name' value = {name} placeholder ='Enter your name' onChange = {(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name ='email' value = {email} placeholder ='Enter your email' onChange = {(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name ='password' value = {password} placeholder ='Confirm password' onChange = {(e)=>setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input placeholder = 'Confirm password here' name="confirmPassword" type = 'password' value = {confirmPassword} onChange = {(e)=>setConfirmPassword(e.target.value)}></input>
                </div>
            </div>
                <input className = 'button' type="submit" value="Register Here" />
            </form>


            <ul className = 'special flex column'>
              <li className = 'flex justifyContent'>
                Already have an account?  Login below:
              </li>
              <li className = 'flex justifyContent'>
              <Button 
                domain = '/login'
                size = 'large'
                cname = 'button'
                text = 'Login Here'
              />
              </li>
            </ul>

          </section>
        </article>
      </div>

      <Footer/>

      <div id="copyright">
	      &copy; choir Design: HTML5 UP
      </div>

    </div>  
  )
}

export default Register