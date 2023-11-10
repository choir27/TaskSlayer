"use client"
import {useState} from "react"
import {useStore} from "../middleware/Zustand"
import {ListOfSongs, Audio, Music} from "../middleware/Interface"
import {State} from "../middleware/Type"
import api from "../api/api"

async function handleAddToPlaylist(playlistData: ListOfSongs, song: Audio){
    try{
        const storage = localStorage.getItem("playlist") as string;

        const playlistSongs = JSON.parse(storage)
        
        if(playlistData.$id === playlistSongs.id){
            playlistSongs.song.push(song.$id)
            localStorage.setItem("playlist", JSON.stringify({id: playlistData.$id, song: playlistSongs.song}))
        }

        const playlistArray = playlistData.playlistSongs.map(ele=>ele);

        playlistArray.push(JSON.stringify(song))

        playlistData.playlistSongs = playlistArray

        const response = await api.updateDocument(process.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID, process.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID, playlistData.$id, playlistData);

        if(response){
            window.location.reload();
        }
    }catch(err){
        console.error(err);
    }
}


export default function Playlist(props: Music){

    const playlist = useStore((state:State)=>state.listOfSongs);
    const song = useStore((state:State)=>state.song);

    const playlistOptions = playlist.map((playlist: ListOfSongs, i: number)=><option key = {playlist.$id} value = {i}>{playlist.playlistName}</option>)

    const [currentPlaylist, setCurrentPlaylist] = useState<ListOfSongs>({$id: "", playlistName: "", playlistSongs: [""], userID: "", user: ""});

    return(
        <section>
            <select onChange={(e:any)=>setCurrentPlaylist({$id: playlist[e.target.value]?.$id, playlistName: playlist[e.target.value]?.playlistName, playlistSongs: playlist[e.target.value]?.playlistSongs, userID: playlist[e.target.value]?.userID, user: playlist[e.target.value]?.user})}>
                <option key = "0">Choose Playlist</option>
                {playlistOptions}
            </select>
            <button className = "fa-solid fa-plus" onClick = {(e)=>{
                e.preventDefault();
                handleAddToPlaylist(currentPlaylist, song[props.index]);
            }}></button>
        </section>

    )
}