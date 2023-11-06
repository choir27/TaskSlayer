import {Button} from "./Button"
import {useStore, State, Audio, Action} from "../middleware/Zustand"
import { ListOfSongs } from "../hooks/MusicHooks";
import {useRouter} from "next/navigation"

export default function Search(){

    const searchValue = useStore((state: State)=>state.searchValue)
    const setSearchValue = useStore((state:Action)=>state.setSearchValue)
    const setSearchResults = useStore((state: Action)=> state.setSearchResults)
    const songs = useStore((state:State)=>state.song);
    const playlists = useStore((state:State)=>state.listOfSongs);
    const {push} = useRouter();

    function handleSearch(){

        const searchResults:Array<Audio | ListOfSongs> = [];
    
        songs.forEach((audio: Audio)=>{
            if(audio.audio.toLowerCase().includes(searchValue.toLowerCase()) || audio.name.toLowerCase().includes(searchValue.toLowerCase()) || audio.user.toLowerCase().includes(searchValue.toLowerCase())){
                searchResults.push(audio);
            }
        })  
     
        playlists.forEach((playlist: ListOfSongs)=>{
            if(playlist.playlistName.toLowerCase().includes(searchValue.toLowerCase()) || playlist.user.toLowerCase().includes(searchValue.toLowerCase())){
                searchResults.push(playlist)
            }

            playlist.playlistSongs.forEach((element: string)=>{
                const song = JSON.parse(element);
                
                if(song.audio.toLowerCase().includes(searchValue.toLowerCase()) || song.name.toLowerCase().includes(searchValue.toLowerCase()) || song.user.toLowerCase().includes(searchValue.toLowerCase())){
                    searchResults.push(playlist);
                }
                
            })
            
        })

        setSearchResults(searchResults);

        console.log(searchResults)

        push("/search")            
    }

    return(
        <form>
            <input type = "search" onChange = {(e)=>setSearchValue(e.target.value)}/>
            <Button text="" className="fa-solid fa-magnifying-glass button" onClick={(e)=>{
                e.preventDefault();
                handleSearch()
                }}/>
        </form>        
    )
}