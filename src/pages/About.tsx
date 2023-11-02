import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import Footer from "../components/Footer"
import MusicPlayer from "../components/MusicPlayer"

const About = () => {

  return (
    <main className = "column flex">
        <NavPanel/>
		<Header setToggleNav = {(e:boolean)=>""} setToggleClose = {(e:boolean)=>""}/>

        <section id = "about" className = "main">
            <h1>About</h1>

            <MusicPlayer/>

                <article className = "flex column alignItems">
                    <p>Music is unique in the sense that it brings all sorts of people together, regardless of language barriers and culture differences.  EchoStream strives to do the same as an audio sharing web application that allows authenticated users to search for songs posted by all users and listen to various song tracks.</p>
                    <p>Users are also able to create playlists, add/remove songs to those playlists.</p>
                </article>
        </section>

        <Footer/>
    </main>
  )
}

export default About