import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import Assets from "../components/Assets"
import Footer from "../components/Footer"

const About = () => {
  return (
    <main className = "column flex">
        <NavPanel/>
        {localStorage.getItem("id") ? <UserHeader/> : <Header/>}

        <section id = "about" className = "main">
            <h1>About</h1>

                <article className = "flex column alignItems">
                    <p>Music is unique in the sense that it brings all sorts of people together, regardless of language barriers and culture differences.  EchoVerse strives to do the same as an audio sharing web application that allows authenticated users to search for songs posted by all users and listen to various song tracks.</p>
                    <p>Users are also able to create playlists, add/remove songs to those playlists.</p>

                    <div className="image">
                      <img src = {Assets.Ailee} alt = "Ailee album"/>
                    </div>
                </article>
        </section>

        <Footer/>
    </main>
  )
}

export default About