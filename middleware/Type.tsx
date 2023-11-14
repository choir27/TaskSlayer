import {Audio, ListOfSongs} from "./Interface"

export type State= {
    song: Audio[],
    listOfSongs: ListOfSongs[],
    searchValue: string,
    searchResults: Array<Audio | ListOfSongs>,
    songDisplay: boolean,
    searchDisplay: boolean
}

export type Action = {
    setSong: (e:Audio) => void,
    setListOfSongs: (e:ListOfSongs[])=>void,
    setSearchValue: (e:string)=> void,
    setSearchResults: (e: Array<Audio | ListOfSongs>)=> void,
    setSongDisplay: (e:boolean)=>void,
    setSearchDisplay: (e:boolean)=>void
}
