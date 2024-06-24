exports.id=476,exports.ids=[476],exports.modules={734:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h});var l=t(326);t(910),t(4942);var r=t(936),a=t(9523),n=t(7862),i=t(8978),o=t(725),d=t(4394),c=t(1587);function h(){let e=(0,r.o)(e=>e.searchResults),s=(0,a.Z)("auth"),t=e.map((e,t)=>(0,l.jsxs)("tr",{children:[l.jsx("td",{children:e.name?e.name:e.playlistName}),l.jsx("td",{children:e.audio?l.jsx("button",{className:"button small",onClick:s=>{s.preventDefault(),localStorage.setItem("song",e.$id),window.location.reload()},children:"Play"}):""}),l.jsx("td",{}),l.jsx("td",{children:e.user}),l.jsx("td",{children:e.audio?l.jsx(d.Z,{index:t}):"  "}),l.jsx("td",{children:s?.toLowerCase()===e.user&&e.audio?(0,n.z)({text:"",className:"fa-solid fa-trash button small",onClick:s=>(0,c.at)(e.$id,e.cloudinaryId)}):""})]},`${e.$id}-${e.name}`));return(0,l.jsxs)(l.Fragment,{children:[l.jsx(i.Z,{}),l.jsx("section",{id:"home",className:"main",children:(0,l.jsxs)("div",{id:"tableContainer",children:[l.jsx("h2",{children:"Search Results"}),e.length?(0,l.jsxs)("table",{children:[l.jsx("thead",{children:(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Name"}),l.jsx("th",{children:"Play"}),l.jsx("th",{}),l.jsx("th",{children:s?"":"User"}),l.jsx("th",{children:"Playlist"}),l.jsx("th",{children:"Delete"})]})}),l.jsx("tbody",{children:t})]}):l.jsx("h2",{children:"No Results Match Your Search"})]})}),l.jsx(o.Z,{})]})}},725:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var l=t(326);function r(){return l.jsx("footer",{className:"flex",children:(0,l.jsxs)("nav",{className:"flex",children:[(0,l.jsxs)("ul",{className:"flex icons",children:[l.jsx("li",{children:l.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://twitter.com/choir241",className:"fa-brands fa-twitter",children:l.jsx("p",{className:"hidden",children:"Twitter"})})}),l.jsx("li",{children:l.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/richard-choir/",className:"fa-brands fa-linkedin",children:l.jsx("p",{className:"hidden",children:"LinkedIn"})})}),l.jsx("li",{children:l.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/225kh_drw/?hl=en",className:"fa-brands fa-instagram",children:l.jsx("p",{className:"hidden",children:"Instagram"})})}),l.jsx("li",{children:l.jsx("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/choir27",className:"fa-brands fa-github",children:l.jsx("p",{className:"hidden",children:"Github"})})})]}),l.jsx("small",{children:"EchoVerse \xa9 2023. All rights are reserved"})]})})}t(7577)},8978:(e,s,t)=>{"use strict";t.d(s,{Z:()=>u});var l=t(326),r=t(434),a=t(8026),n=t(7862),i=t(936),o=t(8585);function d(){let e=(0,i.o)(e=>e.searchValue),s=(0,i.o)(e=>e.setSearchValue),t=(0,i.o)(e=>e.setSearchResults),r=(0,i.o)(e=>e.song),a=(0,i.o)(e=>e.listOfSongs),d=(0,i.o)(e=>e.setSearchDisplay);return(0,l.jsxs)("form",{children:[l.jsx("input",{type:"search",onChange:e=>s(e.target.value)}),l.jsx(n.z,{text:"",className:"fa-solid fa-magnifying-glass button",onClick:s=>{s.preventDefault(),function(){let s=[];r.forEach(t=>{(t?.audio?.toLowerCase().includes(e.toLowerCase())||t?.name?.toLowerCase().includes(e.toLowerCase())||t?.user?.toLowerCase().includes(e.toLowerCase()))&&s.push(t)}),a.forEach(t=>{(t?.playlistName?.toLowerCase().includes(e.toLowerCase())||t?.user?.toLowerCase().includes(e.toLowerCase()))&&s.push(t),t.playlistSongs.forEach(l=>{let r=JSON.parse(l);(r?.audio?.toLowerCase().includes(e.toLowerCase())||r?.name?.toLowerCase().includes(e.toLowerCase())||r?.user?.toLowerCase().includes(e.toLowerCase()))&&s.push(t)})}),s.length||(console.log("No Results Match Your Search"),o.Am.error("No Results Match Your Search")),t(s),d(!0)}()}})]})}var c=t(5047),h=t(9523);function u(){async function e(e){try{e.preventDefault(),sessionStorage.removeItem("auth"),await a.Z.deleteCurrentSession(),window.location.reload(),(0,c.redirect)("/")}catch(e){console.error(e)}}let s=(0,i.o)(e=>e.setHeaderDisplay),t=(0,i.o)(e=>e.headerDisplay),o=(0,h.Z)("auth"),u=`${"display"===t?"fa-solid fa-xmark button small hidden":"fa-solid fa-bars button small hidden"}`;return(0,l.jsxs)("header",{className:"flex column",id:"header",children:[l.jsx("div",{children:l.jsx(r.default,{href:"/",children:l.jsx("h1",{children:"EchoStream"})})}),(0,n.z)({text:"",className:u,id:"menu",onClick:()=>void("display"===t?s("hidden"):s("display"))}),l.jsx("nav",{className:`flex column nav ${t}`,children:(0,l.jsxs)("ul",{className:"flex navBar",children:[l.jsx("li",{children:l.jsx(r.default,{href:"/",children:"Home"})}),l.jsx("li",{children:l.jsx(r.default,{href:"/about",children:"About"})}),o?l.jsx("li",{children:l.jsx(r.default,{href:"/account",children:"Account"})}):"",o?l.jsx("li",{children:l.jsx(r.default,{href:"/addAudio",children:"Add Audio"})}):"",o?l.jsx("li",{children:l.jsx(r.default,{href:"/",onClick:s=>e(s),children:"Logout"})}):"",o?"":l.jsx("li",{children:l.jsx(r.default,{href:"/demo",children:"Demo"})}),o?"":l.jsx("li",{children:l.jsx(r.default,{href:"/login",children:"Login/Register"})}),l.jsx("li",{children:l.jsx(d,{})})]})})]})}},2429:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var l=t(326),r=t(7577),a=t(264);t(2438);var n=t(936),i=t(7862);function o(){return(0,i.z)({text:"Shuffle",className:"button small",onClick:e=>(function(){let e=JSON.parse(localStorage.getItem("playlist")),s=e.song,t=s.length,l;for(;t>0;)l=Math.floor(Math.random()*t),t--,[s[t],s[l]]=[s[l],s[t]];localStorage.setItem("playlist",JSON.stringify({id:e.id,song:s})),window.location.reload()})()})}function d(){let[e,s]=(0,r.useState)(!1),[t,i]=(0,r.useState)(0),[d,c]=(0,r.useState)([]),[h,u]=(0,r.useState)("");(0,n.o)(e=>e.song);let x=()=>{i(e=>e<h.length-1?e+1:0),s(!0)};return(0,l.jsxs)("section",{id:"player",children:[l.jsx("section",{children:(0,l.jsxs)("section",{className:"playerInfo",children:[l.jsx("h3",{children:"Currently Playing Song"}),l.jsx("h2",{children:d[t]?d[t].name:"No music has been added"}),l.jsx(o,{})]})}),h.length>0&&l.jsx(a.Z,{autoPlay:e,onEnded:x,showSkipControls:!0,showJumpControls:!1,src:h[t],onClickPrevious:()=>{i(e=>0===e?h.length-1:e-1),s(!0)},onClickNext:x,timeFormat:"auto"},t)]})}},8491:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var l=t(326),r=t(1587),a=t(7862);function n(e){let s=(e.currentPage-1)*4,t=e.playlist.map(e=>{let s=e.playlistSongs.map(e=>JSON.parse(e).audio);return(0,l.jsxs)("tr",{children:[l.jsx("td",{children:e.playlistName}),l.jsx("td",{children:l.jsx("button",{className:"button small",onClick:t=>{t.preventDefault(),localStorage.setItem("playlist",JSON.stringify({id:e.$id,song:s})),window.location.reload()},children:"Play"})}),l.jsx("td",{children:(0,a.Z)({text:"Edit",className:"button",domain:`/editPlaylist/${e.$id}`})})]},e.$id)});return(0,l.jsxs)("section",{children:[(0,a.z)({className:"button",text:"Song",onClick:s=>{s.preventDefault(),e.setSongDisplay(!1)}}),(0,a.z)({className:"button",text:"Playlist",onClick:s=>{s.preventDefault(),e.setSongDisplay(!0)}}),e.songDisplay?(0,l.jsxs)("div",{id:"tableContainer",children:[l.jsx("h2",{children:"Playlists"}),(0,l.jsxs)("table",{children:[l.jsx("thead",{children:(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Name"}),l.jsx("th",{children:"Play"}),l.jsx("th",{children:"Edit"})]})}),l.jsx("tbody",{children:t})]})]}):l.jsx(r.ZP,{songs:e.songs,check:!0,startIndex:s,endIndex:s+4,currentPage:e.currentPage,setCurrentPage:s=>e.setCurrentPage(s),rowsPerPage:4})]})}},910:()=>{},4942:()=>{}};