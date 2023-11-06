import {useState, useContext} from "react"
import {Button} from "../components/Button"
import api from "../api/api"
import {Permission, Role} from "appwrite"
import {UserContext} from "../middleware/Context"
import Playlist from "../components/Playlist"

export interface ListOfSongs{
    $id?: string,
    playlistName: string,
    playlistSongs: string[],
    userID: string,
    user: string
}

export async function GetPlaylist(setPlaylist: (e: ListOfSongs[])=>void){
    try{
        const data = await api.listDocuments(process.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID, process.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID);

        setPlaylist(data.documents);
    }catch(err){
        console.error(err);
    }
}

function NewPlaylist(playlist: string, setPlaylist: (e:string)=>void, userID: string, userEmail: string, index: number){

    async function handleCreatePlaylist(){
        try{
            const data = {
                playlistName: playlist,
                playlistSongs: [],
                userID: userID,
                user: userEmail 
            }

            const response = await api.createDocument(process.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID, process.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID, data, [Permission.read(Role.any())]);

            if(response){
                window.location.reload();
            }
        }catch(err){
            console.error(err);
        }
    }

    return(
        <form className = "flex column alignStart">
            <div className = "flex alignItems justifyCenter">
                <input type = "text" onChange = {(e)=>setPlaylist(e.target.value)} placeholder = "New Playlist Name"/>
                {Button({text: "Create Playlist", className: "", onClick: (e)=>{
                    e.preventDefault();
                    handleCreatePlaylist()
                }})}
            </div>
          
            <Playlist index = {index}/>
         
        </form>

    )

}

export interface Music{
    index: number
}


export default function MusicHooks(props: Music){

    const [playlistDisplay, setPlaylistDisplay] = useState<boolean>(false);
    const [playlist, setPlaylist] = useState<string>("");

    const user = useContext(UserContext);

    return(
        <section id = "playlist">
            <button className = {`${playlistDisplay ? "fa-solid fa-xmark" : "fa-solid fa-plus"} button`} onClick = {(e)=>{
                e.preventDefault();
                setPlaylistDisplay(!playlistDisplay);
            }}></button>

            {playlistDisplay ? NewPlaylist(playlist, (e:string)=>setPlaylist(e), user?.$id, user?.email, props.index) : ""}
        </section>
    )
}