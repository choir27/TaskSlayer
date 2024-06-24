"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{1154:function(e,t,n){var a=n(8999),s=n(357);let r={sdk:null,provider:()=>{if(r.sdk)return r.sdk;let e=new a.KU;e.setEndpoint(s.env.NEXT_PUBLIC_ENDPOINT).setProject(s.env.NEXT_PUBLIC_PROJECT);let t=new a.mR(e),n=new a.Lg(e),l=new a.KU(e),o=new a.Ke(e);return r.sdk={database:n,account:t,client:l,storage:o},r.sdk},createAccount:(e,t,n)=>r.provider().account.create("unique()",e,t,n),updateAccountName:e=>r.provider().account.updateName(e),updateAccountPassword:(e,t)=>r.provider().account.updatePassword(e,t),updateAccountEmail:(e,t)=>r.provider().account.updateEmail(e,t),getAccount:()=>r.provider().account.get(),createSession:(e,t)=>r.provider().account.createEmailSession(e,t),deleteCurrentSession:()=>r.provider().account.deleteSession("current"),deleteSessions:()=>r.provider().account.deleteSessions(),createDocument:(e,t,n,a)=>r.provider().database.createDocument(e,t,"unique()",n,a),listDocuments:(e,t)=>r.provider().database.listDocuments(e,t),updateDocument:(e,t,n,a)=>r.provider().database.updateDocument(e,t,n,a),deleteDocument:(e,t,n)=>r.provider().database.deleteDocument(e,t,n),uploadFile:(e,t)=>r.provider().storage.createFile(s.env.NEXT_PUBLIC_APP_SONGS,e,t),listFiles:()=>r.provider().storage.listFiles(s.env.NEXT_PUBLIC_APP_SONGS)};t.Z=r},9787:function(e,t,n){n.d(t,{Z:function(){return r},z:function(){return l}});var a=n(7437),s=n(7138);function r(e){return(0,a.jsx)(s.default,{href:e.domain,className:e.className,children:e.text})}function l(e){return(0,a.jsx)("button",{id:e.id,className:e.className,onClick:t=>e.onClick(t),children:e.text},e.key)}n(2265)},5688:function(e,t,n){n.d(t,{u:function(){return p},Z:function(){return m}});var a=n(7437),s=n(2265),r=n(8999),l=n(1154),o=n(9787),i=n(4627),c=n(357);async function u(e,t){try{let n=localStorage.getItem("playlist"),a=JSON.parse(n);e.$id===a.id&&(a.song.push(t.$id),localStorage.setItem("playlist",JSON.stringify({id:e.$id,song:a.song})));let s=e.playlistSongs.map(e=>e);s.push(JSON.stringify(t)),e.playlistSongs=s,await l.Z.updateDocument(c.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID,c.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID,e.$id,e)&&window.location.reload()}catch(e){console.error(e)}}function d(e){let t=(0,i.o)(e=>e.listOfSongs),n=(0,i.o)(e=>e.song),r=t.map((e,t)=>(0,a.jsx)("option",{value:t,children:e.playlistName},e.$id)),[l,o]=(0,s.useState)({$id:"",playlistName:"",playlistSongs:[""],userID:"",user:""});return(0,a.jsxs)("section",{children:[(0,a.jsxs)("select",{onChange:e=>{var n,a,s,r,l;return o({$id:null===(n=t[e.target.value])||void 0===n?void 0:n.$id,playlistName:null===(a=t[e.target.value])||void 0===a?void 0:a.playlistName,playlistSongs:null===(s=t[e.target.value])||void 0===s?void 0:s.playlistSongs,userID:null===(r=t[e.target.value])||void 0===r?void 0:r.userID,user:null===(l=t[e.target.value])||void 0===l?void 0:l.user})},children:[(0,a.jsx)("option",{children:"Choose Playlist"},"0"),r]}),(0,a.jsx)("button",{className:"fa-solid fa-plus",onClick:t=>{t.preventDefault(),u(l,n[e.index])}})]})}var h=n(7937),g=n(357);async function p(e){try{let t=await l.Z.listDocuments(g.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID,g.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID);e(t.documents)}catch(e){console.error(e)}}function m(e){let[t,n]=(0,s.useState)(!1),[i,c]=(0,s.useState)(""),u=(0,s.useContext)(h.S);return(0,a.jsxs)("section",{id:"playlist",children:[(0,a.jsx)("button",{className:"".concat(t?"fa-solid fa-xmark black":"fa-solid fa-plus"," button"),onClick:e=>{e.preventDefault(),n(!t)}}),t?function(e,t,n,s,i){async function c(){try{await l.Z.createDocument(g.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID,g.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID,{playlistName:e,playlistSongs:[],userID:n,user:s},[r.y3.read(r.uU.any())])&&window.location.reload()}catch(e){console.error(e)}}return(0,a.jsxs)("form",{className:"flex column alignStart",children:[(0,a.jsxs)("div",{className:"flex alignItems justifyCenter",children:[(0,a.jsx)("input",{type:"text",onChange:e=>t(e.target.value),placeholder:"New Playlist Name"}),(0,o.z)({text:"Create Playlist",className:"",onClick:e=>{e.preventDefault(),c()}})]}),(0,a.jsx)(d,{index:i})]})}(i,e=>c(e),null==u?void 0:u.$id,null==u?void 0:u.email,e.index):""]})}},2646:function(e,t,n){n.d(t,{AX:function(){return d},ZP:function(){return g},at:function(){return h}});var a=n(7437);n(2265);var s=n(8472),r=n(1154),l=n(9787);function o(e){let t=t=>{e.setCurrentPage(t)};return(0,a.jsx)("div",{className:e.className,children:Math.ceil(e.arrayLength/e.rowsPerPage)<e.currentPage+1?Array.from({length:Math.ceil(e.arrayLength/e.rowsPerPage)},(e,n)=>(0,l.z)({onClick:e=>{t(n+1)},text:"".concat(n+1),key:"button-".concat(n),className:"button"})):Array.from({length:Math.ceil(e.arrayLength/e.rowsPerPage)},(n,s)=>s<e.currentPage-2&&0!==s?(0,a.jsx)("h1",{children:"..."},"".concat(s,"-dots")):!(s>e.currentPage+1)&&s<e.currentPage+1||s+1===Math.ceil(e.arrayLength/e.rowsPerPage)?(0,l.z)({onClick:e=>{t(s+1)},text:"".concat(s+1),key:"button-".concat(s),className:"button"}):(0,a.jsx)("h1",{children:"..."},"".concat(s,"-dots")))},"buttons")}var i=n(5688),c=n(4573),u=n(357);async function d(e){try{let t=await r.Z.listDocuments(u.env.NEXT_PUBLIC_DATABASE_ID,u.env.NEXT_PUBLIC_COLLECTION_ID);t.documents.length&&e(t.documents)}catch(e){console.error(e)}}async function h(e,t){try{let n=await s.Z.delete("https://echoverse-backend.onrender.com/deleteAudio/".concat(t));await r.Z.deleteDocument(u.env.NEXT_PUBLIC_DATABASE_ID,u.env.NEXT_PUBLIC_COLLECTION_ID,e)&&n&&window.location.reload()}catch(e){console.error(e)}}function g(e){let t=(0,c.Z)("auth"),n=e.songs.slice(e.startIndex,e.endIndex).map((e,n)=>e.user!==(null==t?void 0:t.toLowerCase())?(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.name}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{className:"button small",onClick:t=>{t.preventDefault(),localStorage.setItem("song",JSON.stringify([e.audio])),localStorage.setItem("playlist",""),window.location.reload()},children:"Play"})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:e.user}),(0,a.jsx)("td",{className:"playlist",children:(0,a.jsx)(i.Z,{index:n})}),(0,a.jsx)("td",{children:(null==t?void 0:t.toLowerCase())===e.user?(0,l.z)({text:"",className:"fa-solid fa-trash button small",onClick:t=>h(e.$id,e.cloudinaryId)}):""})]},e.$id):e.user===(null==t?void 0:t.toLowerCase())?(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.name}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{className:"button small",onClick:t=>{t.preventDefault(),localStorage.setItem("song",JSON.stringify([e.audio])),localStorage.setItem("playlist",""),window.location.reload()},children:"Play"})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{className:"playlist",children:(0,a.jsx)(i.Z,{index:n})}),(0,a.jsx)("td",{children:(0,l.z)({text:"",className:"fa-solid fa-trash button small",onClick:t=>h(e.$id,e.cloudinaryId)})})]},e.$id):void 0);return(0,a.jsx)("section",{children:(0,a.jsxs)("div",{id:"tableContainer",children:[(0,a.jsx)("h2",{children:"Song List"}),(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Play"}),(0,a.jsx)("th",{}),(0,a.jsx)("th",{children:t?"":"User"}),(0,a.jsx)("th",{children:"Playlist"}),(0,a.jsx)("th",{children:"Delete"})]})}),(0,a.jsx)("tbody",{children:n})]}),(0,a.jsx)(o,{currentPage:e.currentPage,setCurrentPage:t=>e.setCurrentPage(t),rowsPerPage:e.rowsPerPage,arrayLength:e.songs.length})]})})}},7937:function(e,t,n){n.d(t,{S:function(){return l},Z:function(){return o}});var a=n(7437),s=n(2265),r=n(1154);let l=(0,s.createContext)({});function o(e){let{children:t}=e,[n,o]=(0,s.useState)();return(0,s.useEffect)(()=>{async function e(){o(await r.Z.getAccount())}sessionStorage.getItem("auth")&&e()},[]),(0,a.jsx)(l.Provider,{value:n,children:t})}},4573:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(2265);function s(e){let[t,n]=(0,a.useState)("");return(0,a.useEffect)(()=>{n(sessionStorage.getItem(e))},[]),t}},4627:function(e,t,n){n.d(t,{o:function(){return r}});var a=n(9099),s=n(4643);let r=(0,a.Ue)(e=>({song:[],setSong:t=>{e((0,s.Uy)(e=>{e.song=t}))},listOfSongs:[],setListOfSongs:t=>{e((0,s.Uy)(e=>{e.listOfSongs=t}))},searchValue:"",setSearchValue:t=>{e((0,s.Uy)(e=>{e.searchValue=t}))},searchResults:[],setSearchResults:t=>{e((0,s.Uy)(e=>{e.searchResults=t}))},searchDisplay:!1,setSearchDisplay:t=>{e((0,s.Uy)(e=>{e.searchDisplay=t}))},songDisplay:!1,setSongDisplay:t=>{e((0,s.Uy)(e=>{e.songDisplay=t}))},headerDisplay:"",setHeaderDisplay:t=>{e((0,s.Uy)(e=>{e.headerDisplay=t}))}}))}}]);