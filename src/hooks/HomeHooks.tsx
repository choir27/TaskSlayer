import api from "../api/api"
import {Audio} from "../middleware/Zustand"
import React from "react"
import PaginatedButtons from "../components/PaginatedButtons"
import {Button} from "../components/Button"
import axios from "axios"
import MusicHooks from "./MusicHooks"

export async function GetMusic(setSong: (e:Audio)=>void){
    try{
        const data = await api.listDocuments(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_COLLECTION_ID);
        if(data.documents.length){
            setSong(data.documents);
        }
    }catch(err){
        console.error(err);
    }
}

interface Render{
  songs: Audio[], 
  check: boolean, 
  startIndex:number, 
  endIndex:number,
  currentPage: number,
  setCurrentPage: (e:number)=>void,
  rowsPerPage: number
}

async function handleDeleteSong(docID: string, cloudinaryID: string){
  try{
    // const deleteAxios = await axios.delete(`https://echoverse-backend.onrender.com/deleteAudio/${cloudinaryID}`);
    console.log(cloudinaryID)
    const deleteAxios = await axios.delete(`https://echoverse-backend.onrender.com/deleteAudio/${cloudinaryID}`);
    if(deleteAxios){
      console.log(deleteAxios)
      // window.location.reload();

      const data = await api.deleteDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_COLLECTION_ID, docID);

      if(data && deleteAxios){
        window.location.reload();

      }
    }
  }catch(err){
    console.error(err);
  } 
}

export function RenderMusicList(props: Render){

    const songList = props.songs.slice(props.startIndex, props.endIndex).map((song:Audio, i:number)=>{
      if(!props.check){
        return(
          <tr key={song.$id}>
          <td>{song.name}</td>
          <td>
            <button
              className="button small"
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("song", song.$id);
                window.location.reload();
              }}
            >
              Play
            </button>
          </td>
          <td></td>
          <td>{song.user}</td>
          <td><MusicHooks index = {i}/></td>
          <td>{sessionStorage.getItem("auth")?.toLowerCase() === song.user ? Button({text: "", className: "fa-solid fa-trash button small", onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleDeleteSong(song.$id, song.cloudinaryId)}) : ""}</td>
        </tr>
      )
      }else if(song.user === sessionStorage.getItem("auth")?.toLowerCase()){
        return(
            <tr key={song.$id}>
            <td>{song.name}</td>
            <td>
              <button
                className="button small"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.setItem("song", song.$id);
                  window.location.reload();
                }}
              >
                Play
              </button>
            </td>
            <td></td>
            <td></td>
            <td><MusicHooks index = {i}/></td>
            <td>{Button({text: "", className: "fa-solid fa-trash button small", onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleDeleteSong(song.$id, song.cloudinaryId)})}</td>
          </tr>
        )
      }
 
    })

    return (
        <div id = "tableContainer">
        
        <h2>Song List</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Play</th>
              <th></th>
              <th>{sessionStorage.getItem("auth") ? "" : "User"}</th>
              <th>Playlist</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {songList}
          </tbody>
        </table>
        <PaginatedButtons currentPage = {props.currentPage} setCurrentPage = {(e:number)=>props.setCurrentPage(e)} rowsPerPage={props.rowsPerPage} arrayLength={props.songs.length}/>

       
      </div>
    
    )
}