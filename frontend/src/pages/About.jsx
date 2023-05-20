import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import Footer from "../components/Footer"

const About = () => {
  return (
    <div id = "wrapper">
        <NavPanel/>
        {localStorage.getItem("id") ? <UserHeader idName = "nav"/> : <Header idName = "nav"/>}
        <div id="main">
            <article className = "post featured">
                <section className = "major">
                    <h1>About</h1>
                </section>
            </article>
        </div>

        <Footer/>
        <div id="copyright">
            K-pop Wired &copy; 2023. All rights are reserved
        </div>
    </div>
  )
}

export default About