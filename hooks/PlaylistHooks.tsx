import {useStore, State, Action, Audio} from "../middleware/Zustand"
import {ListOfSongs} from "../hooks/MusicHooks"
import { RenderMusicList } from "./HomeHooks";
import {Button} from "../components/Button"


interface Playlist{
    currentPage: number,
    setCurrentPage: (e:number)=>void,
    songs: Audio[],
    songDisplay: boolean,
    setSongDisplay: (e:boolean)=>void,
    playlist: ListOfSongs[]
}

export default function RenderPlaylist(props: Playlist){


    const rowsPerPage = 4;
    const startIndex = (props.currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const playlistTable = props.playlist.map((listOfSongs: ListOfSongs)=>{

        const playlistSongs = listOfSongs.playlistSongs.map((element:string)=>{
            const song = JSON.parse(element);
            return song.$id
        })

        return(
            <tr key={listOfSongs.$id}>
                <td>{listOfSongs.playlistName}</td>
                <td>
                    <button className = "button small"
                    onClick = {(e)=>{
                        e.preventDefault();
                        localStorage.setItem("playlist", JSON.stringify(playlistSongs))
                    }}
                    >
                        Play
                    </button>
                </td>
                <td></td>
                <td></td>
            </tr>
        )
    })

    return(
        <section>
            {Button({className: "button", text: "Song", onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                e.preventDefault()
                props.setSongDisplay(false)
            }})}
            {Button({className: "button", text: "Playlist", onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                e.preventDefault()
                props.setSongDisplay(true)
            }})}
            {props.songDisplay? 
            <div id = "tableContainer">
                <h2>Playlists</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Play</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {playlistTable}
                    </tbody>
                </table>
            </div>
            :
            RenderMusicList({songs: props.songs, check: true, startIndex: startIndex, endIndex: endIndex, currentPage: props.currentPage, setCurrentPage: (e:number)=>props.setCurrentPage(e), rowsPerPage: rowsPerPage})
            }
        </section>
  
    )
}