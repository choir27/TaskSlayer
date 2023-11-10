"use client"
import "../../css/global.css"
import {useStore} from "../../middleware/Zustand"
import {State} from "../../middleware/Type"
import {ListOfSongs, Audio} from "../../middleware/Interface"
import Session from "../../middleware/Session"
import {Button} from "../../components/Button"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MusicHooks from "../../components/PlaylistHub"
import {handleDeleteSong} from "../../hooks/HomeHooks"


export default function SearchResultsDisplay(){

    const searchResults = useStore((state: State)=>state.searchResults);
    const auth = Session("auth");

    const listOfResults = searchResults.map((element: Audio & ListOfSongs, i: number)=>{
        return(
            <tr key={`${element.$id}-${i}`}>
            <td>{element.name ? element.name : element.playlistName}</td>
            <td>
                {element.audio ?
              <button
                className="button small"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("song", element.$id);
                  window.location.reload();
                }}
              >
                Play
              </button>
                :
                ""
                }
            </td>
            <td></td>
            <td>{element.user}</td>
            <td>{element.audio ? <MusicHooks index = {i}/> : "  "}</td>
            <td>{auth?.toLowerCase() === element.user && element.audio ? Button({text: "", className: "fa-solid fa-trash button small", onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleDeleteSong(element.$id, element.cloudinaryId)}) : ""}</td>
          </tr>
        )
    })

    return(
        <main className = "column flex">
            <Header/>
            <section id = "home" className = "main">

            <div id = "tableContainer">
        
        <h2>Search Results</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Play</th>
              <th></th>
              <th>{auth ? "" : "User"}</th>
              <th>Playlist</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {listOfResults}
          </tbody>
        </table>
        {/* <PaginatedButtons currentPage = {props.currentPage} setCurrentPage = {(e:number)=>props.setCurrentPage(e)} rowsPerPage={props.rowsPerPage} arrayLength={props.songs.length}/> */}

       
            </div>
            </section>
            <Footer/>
        </main>
    )
}