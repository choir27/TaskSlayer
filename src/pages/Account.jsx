import Header from "../components/Header"
import Footer from "../components/Footer";
import Button from "../components/Button"

const Account = () => {

  return (
   <div>
      <Header/>
      <div id = 'main'>
        <article className = 'post' id = 'account'>
          <section className="major column flex">
            <h1 className = 'flex justifyContent'>Account</h1>

            <form className = 'flex column justifyContent alignItems' method="POST" action="#">
            <div className="fields">
                <div className="field">
                    <label>Email</label>
                    <input placeholder = 'Put your email here' type="text" name="email"/>
                </div>
                <div className="field">
                    <label>User Name</label>
                    <input placeholder = 'Put your user name here' type="text" name="userName"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder = 'Put your password here' type="password" name="userName"/>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input placeholder = 'Confirm password here' name="confirmPassword" type = 'password'></input>
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

export default Account