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

type State= {
    song: Audio[],
    listOfSongs: ListOfSongs[]
}

type Action = {
    setSong: (e:Audio) => void,
    setListOfSongs: (e:ListOfSongs[])=>void
}

export const useStore = create<State & Action>(
    (set)=>({
        song: [],
        setSong: (song: Audio)=>{
            set(
                produce(
                    (state)=>{
                        state.song = song
                    }
                )
            )
        },
        listOfSongs: [],
        setListOfSongs: (listOfSongs: ListOfSongs[])=>{
            set(
                produce(
                    (state)=>{
                        state.listOfSongs = listOfSongs
                    }
                )
            )
        }
    })
);