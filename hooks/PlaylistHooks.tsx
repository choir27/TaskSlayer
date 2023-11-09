import {useStore, State} from "../middleware/Zustand"
import {ListOfSongs} from "../hooks/MusicHooks"

export default function RenderPlaylist(){
    const playlist = useStore((state:State)=>state.listOfSongs);

    console.log(playlist)

    const playlistTable = playlist.map((listOfSongs: ListOfSongs)=>{

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
    )
}