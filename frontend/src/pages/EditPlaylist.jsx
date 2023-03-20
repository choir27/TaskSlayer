import UserHeader from "../components/UserHeader"
import Footer from "../components/Footer"
import {useParams} from "react-router-dom"

const EditPlaylist = () => {

  const playlistID = useParams();
  console.log(playlistID["id"])

  return (
    <div>
        <UserHeader />
        <div id="main">
        <article className="post featured">
          <section className="major">
                <h1>Edit Playlist</h1>
          </section>
        </article>
        </div>
        <Footer />

        <div id="copyright">
&copy; choir Design: HTML5 UP
        </div>
    </div>
  )
}

export default EditPlaylist