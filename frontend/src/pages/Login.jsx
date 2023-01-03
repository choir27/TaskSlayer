import Header from "../components/Header"
import Footer from "../components/Footer";

const Login = () => {

  return (
   <div>
      <Header/>
      <div id = 'main'>
        <article className = 'post' id = 'account'>
          <section className="major column flex">
            <h1 className = 'flex justifyContent'>Login</h1>

            <form className = 'flex column justifyContent alignItems' method="POST" action="#">
            <div className="fields">
                <div className="field">
                    <label>Email</label>
                    <input placeholder = 'Put your email here' type="text" name="email"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder = 'Put your password here' type="password" name="userName"/>
                </div>
            </div>
                <input className = 'button' type="submit" value="Login Here" />
            </form>

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

export default Login