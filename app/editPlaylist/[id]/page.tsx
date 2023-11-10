import { GetServerSideProps } from "next"
import EditPlaylist from "../../../hooks/EditPlaylist"
import "../../../css/global.css"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function GetServerSideProps(ctx){

    const userId = ctx.params

    return(
        <main className = "column flex">
            <Header/>
            <section className = "main" id = "home">

                <section>
                    <h1>Edit Playlist</h1>
                    <EditPlaylist id = {userId.id}/>
                </section>

            </section>

            <Footer/>

        </main>
    )
}