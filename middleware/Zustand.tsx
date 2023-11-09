import {create} from "zustand"
import {produce} from "immer"
import {ListOfSongs} from "../hooks/MusicHooks"

export interface Audio{
    $id: string,
    $updatedAt: string,
    audio: string,
    cloudinaryId: string,
    name: string,
    user: string,
    userID: string
}

export type State= {
    song: Audio[],
    listOfSongs: ListOfSongs[],
    searchValue: string,
    searchResults: Array<Audio | ListOfSongs>,
    songDisplay: boolean
}

export type Action = {
    setSong: (e:Audio) => void,
    setListOfSongs: (e:ListOfSongs[])=>void,
    setSearchValue: (e:string)=> void,
    setSearchResults: (e: Array<Audio | ListOfSongs>)=> void,
    setSongDisplay: (e:boolean)=>void
}

export const useStore = create(
    (set)=>({
        song: [],
        setSong: (song: Audio[])=>{
            set(
                produce(
                    (state:State)=>{
                        state.song = song
                    }
                )
            )
        },
        listOfSongs: [],
        setListOfSongs: (listOfSongs: ListOfSongs[])=>{
            set(
                produce(
                    (state:State)=>{
                        state.listOfSongs = listOfSongs
                    }
                )
            )
        },
        searchValue: "",
        setSearchValue: (searchValue: string)=>{
            set(
                produce(
                    (state: State)=>{
                        state.searchValue = searchValue
                    }
                )
            )
        },
        searchResults: [],
        setSearchResults: (searchResults: Array<Audio | ListOfSongs>)=>{
            set(
                produce(
                    (state: State)=>{
                        state.searchResults = searchResults
                    }
                )
            )
        },
        songDisplay: false,
        setSongDisplay: (songDisplay: boolean)=>{
            set(
                produce((state: State)=>{
                    state.songDisplay = songDisplay
                }
                )
            )
        }
    })
);