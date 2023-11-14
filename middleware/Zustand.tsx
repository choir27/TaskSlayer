import {create} from "zustand"
import {produce} from "immer"
import {State} from "./Type"
import {ListOfSongs, Audio} from "./Interface"

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
        searchDisplay: false,
        setSearchDisplay: (searchDisplay: boolean)=>{
            set(
                produce(
                    (state: State)=>{
                        state.searchDisplay = searchDisplay
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