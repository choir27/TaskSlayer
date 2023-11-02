import {useStore} from "../middleware/Zustand"
import {ListOfSongs} from "../hooks/MusicHooks"

interface PlaylistInterface{
    setPlaylist: (e:string)=>void
}

export default function Playlist(props: PlaylistInterface){

    const playlist = useStore((state)=>state.listOfSongs);
    const playlistOptions = playlist.map((playlist: ListOfSongs)=><option key = {playlist.$id}>{playlist.playlistName}</option>)

    return(
        <select onChange={(e)=>props.setPlaylist(e.target.value)}>
            {playlistOptions}
        </select>
    )
}