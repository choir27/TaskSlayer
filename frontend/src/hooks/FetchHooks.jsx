const GetPlaylist = fetch("http://localhost:8000/playlist")
    .then(res=>res.json())
    .then(data=>data);

const GetAudio = fetch("http://localhost:8000/audio")
    .then(res=>res.json())
    .then(data=>data);

const GetUser = fetch("http://localhost:8000/api")
    .then(res=>res.json())
    .then(data=>data);

export {
GetPlaylist,
GetAudio,
GetUser
}