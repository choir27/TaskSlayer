import {Playlist, ListOfSongs} from "../middleware/Interface"
import RenderMusicList from "./HomeHooks";
import {Button} from "../components/Button"


export default function RenderPlaylist(props: Playlist){
    const rowsPerPage = 4;
    const startIndex = (props.currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    const playlistTable = props.playlist.map((listOfSongs: ListOfSongs)=>{

        const playlistSongs = listOfSongs.playlistSongs.map((element:string)=>{
            const song = JSON.parse(element);
            return song.audio
        })

        return(
            <tr key={listOfSongs.$id}>
                <td>{listOfSongs.playlistName}</td>
                <td>
                    <button className = "button small"
                    onClick = {(e)=>{
                        e.preventDefault();
                        localStorage.setItem("playlist", JSON.stringify({"id": listOfSongs.$id, "song": playlistSongs}))
                        window.location.reload();
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
            <RenderMusicList songs = {props.songs} check = {true} startIndex = {startIndex} endIndex = {endIndex} currentPage = {props.currentPage} setCurrentPage = {(e:number)=>props.setCurrentPage(e)} rowsPerPage = {rowsPerPage} />
            }
        </section>
  
    )
}