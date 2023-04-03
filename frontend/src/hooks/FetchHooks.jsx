const GetPlaylist = fetch("https://illya-site-backend-production.up.railway.app/playlist")
    .then(res=>res.json())
    .then(data=>data);

const GetAudio = fetch("https://illya-site-backend-production.up.railway.app/audio")
    .then(res=>res.json())
    .then(data=>data);

const GetUser = fetch("https://illya-site-backend-production.up.railway.app/api")
    .then(res=>res.json())
    .then(data=>data);

export {
GetPlaylist,
GetAudio,
GetUser
}