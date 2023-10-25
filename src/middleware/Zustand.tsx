import {create} from "zustand"
import {produce} from "immer"

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
    song: Audio[]  
}

type Action = {
    setSong: (e:Audio) => void
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
        }
    })
);