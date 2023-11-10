export interface Audio{
    $id: string,
    $updatedAt: string,
    audio: string,
    cloudinaryId: string,
    name: string,
    user: string,
    userID: string
}

export interface ListOfSongs{
    $id?: string,
    playlistName: string,
    playlistSongs: string[],
    userID: string,
    user: string
}

export interface Playlist{
    currentPage: number,
    setCurrentPage: (e:number)=>void,
    songs: Audio[],
    songDisplay: boolean,
    setSongDisplay: (e:boolean)=>void,
    playlist: ListOfSongs[]
}

export interface Render{
    songs: Audio[], 
    check: boolean, 
    startIndex:number, 
    endIndex:number,
    currentPage: number,
    setCurrentPage: (e:number)=>void,
    rowsPerPage: number
}
  
export interface Music{
    index: number
}

export interface Buttons{
    arrayLength: number,
    setCurrentPage: (e:number) => void,
    currentPage: number,
    rowsPerPage: number,
    className?: string
}

export interface GenreSelectProps{
    onGenreChange: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

export interface ButtonLinkProps{
    domain: string,
    className: string,
    text: string
}

export interface ButtonProps{
    className: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
    text: string,
    key?:string
}
