import api from "../api/api"
import {Audio} from "../middleware/Zustand"
import React from "react"
import PaginatedButtons from "../components/PaginatedButtons"

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

export function RenderMusicList(props: Render){


    const songList = props.songs.slice(props.startIndex, props.endIndex).map((song:Audio)=>{
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
          <td></td>
          <td>{song.user}</td>
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
            <td></td>
          </tr>
        )
      }
 
    })

    console.log(songList)
    return (
        <div id = "tableContainer">

        <table>
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Play</th>
              <th></th>
              <th></th>
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