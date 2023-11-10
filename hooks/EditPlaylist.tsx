"use client"
import {useContext, useState} from "react"
import {useStore} from "../middleware/Zustand"
import {State} from "../middleware/Type"
import {ListOfSongs, User, Edit} from "../middleware/Interface"
import {UserContext} from "../middleware/Context"
import {Button} from "../components/Button"
import api from "../api/api"
import {useRouter} from "next/navigation"


async function handleChangePlaylistName(name: string, playlist: ListOfSongs, user:User){
    try{
        const data = {
            playlistName: name,
            playlistSongs: playlist.playlistSongs,
            userID: user.$id,
            user: user.email
        }

        await api.updateDocument(process.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID, process.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID, playlist.$id, data);
        window.location.reload();
    }catch(err){
        console.error(err);
    }
}

async function handleRemoveFromPlaylist(id: string, findPlaylist: ListOfSongs, user:User){
    try{
        const array = findPlaylist.playlistSongs.map(ele=>ele)

        const findSong = array.find((element:string)=>{
            const songObject = JSON.parse(element);
            return songObject.$id === id;
        }) as string


        array.splice(array.indexOf(findSong),1)

        const data = {
            playlistName: findPlaylist.playlistName,
            playlistSongs: array,
            userID: user.$id,
            user: user.email
        }

        await api.updateDocument(process.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID, process.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID, findPlaylist.$id, data);
        window.location.reload();
    }catch(err){
        console.error(err);
    }
}

async function handleDeletePlaylist(playlist: ListOfSongs, push: (e:string)=>void){
    try{
        await api.deleteDocument(process.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID, process.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID, playlist.$id);
        localStorage.setItem("playlist", "");
        push("/");
    }catch(err){
        console.error(err);
    }
};

export default function EditPlaylist(props: Edit){
    const playlist = useStore((state:State)=>state.listOfSongs);
    const user = useContext(UserContext) as User;

    const [playlistNameInputDisplay, setPlaylistNameInputDisplay] = useState<boolean>(false);
    const [playlistName, setPlaylistName] = useState<string>("");

    const findPlaylist = playlist.find((listOfSongs: ListOfSongs)=>listOfSongs.$id === props.id) as ListOfSongs;

    const updatedAt = findPlaylist?.$updatedAt as string;

    const date = new Date(updatedAt);

    const {push} = useRouter();

    const songList = findPlaylist?.playlistSongs.map((element:string)=>{
        const songObject = JSON.parse(element);
        
        return(
            <tr key = {songObject.$id}>
                <td>{songObject.name}</td>
                <td>{songObject.artist}</td>
                <td>{songObject.genre}</td>
                <td>{songObject.user}</td>
                <td>{Button({text: "", className: "fa-solid fa-xmark button small", onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                    e.preventDefault();
                    handleRemoveFromPlaylist(songObject.$id, findPlaylist, user)}})}</td>
            </tr>
        )
    })

    return(
        <div id = "tableContainer">
            <section>
                {playlistNameInputDisplay ? 
                    <form className = "flex spaceEvenly">
                           
                        <h2>Edit Playlist Name</h2>
                        <input type = "text" onChange = {(e)=>setPlaylistName(e.target.value)}/>
                        {Button({text: "", 
                            className: "fa-solid fa-pen-to-square button", 
                            onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                                e.preventDefault();
                                handleChangePlaylistName(playlistName, findPlaylist, user);
                            }})}
                        {Button({text: "", 
                            className: "fa-solid fa-right-from-bracket button", 
                            onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                                e.preventDefault();
                                setPlaylistNameInputDisplay(false);
                        }})}
                    </form>
                    : 
                <div className = "flex spaceEvenly">
                    <h2>Playlist Name: {findPlaylist?.playlistName}</h2>
                    {Button({text: "", 
                    className: "fa-regular fa-pen-to-square button", 
                    onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                        e.preventDefault();
                        setPlaylistNameInputDisplay(true);
                    }})}

                    {Button({text: "", 
                    className: "fa-solid fa-trash-can button", 
                    onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                        e.preventDefault();
                        handleDeletePlaylist(findPlaylist, push);
                    }})}
                </div>
                }
            </section>

            <h3>Updated At: {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Song Name</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>User</th>
                        <th>Remove</th>
                    </tr>

                </thead>
                <tbody>
                    {songList}
                </tbody>
            </table>
        </div>
    )
}