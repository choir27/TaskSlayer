(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{3672:function(e,s,a){Promise.resolve().then(a.bind(a,5207))},5207:function(e,s,a){"use strict";a.r(s);var t=a(7437),l=a(2265),n=a(6463);a(7330),a(3813);var r=a(3650),i=a(2674),o=a(9787),c=a(178),d=a(8295),u=a(1956),h=a(4627);let x=/^[a-zA-Z]*$/,j=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,m=/^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;s.default=(0,d.Z)(()=>{let[e,s]=(0,l.useState)(""),[a,d]=(0,l.useState)(!1),[f,v]=(0,l.useState)(""),[p,g]=(0,l.useState)(!1),[w,N]=(0,l.useState)(""),[b,C]=(0,l.useState)(!1),[y,S]=(0,l.useState)(!1),L=(0,h.o)(e=>e.searchDisplay),k=(0,h.o)(e=>e.setSearchDisplay);(0,l.useEffect)(()=>{k(!1)},[]);let Z=(0,t.jsx)("i",{className:"fa-solid fa-check"}),E=(0,t.jsx)("i",{className:"fa-solid fa-xmark"}),{push:A}=(0,n.useRouter)();return(0,t.jsx)(t.Fragment,{children:L?(0,t.jsx)(u.default,{}):y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{}),(0,t.jsxs)("section",{id:"auth",className:"main",children:[(0,t.jsx)("h1",{children:"Login"}),(0,t.jsxs)("form",{className:"flex column alignStart",method:"POST",action:"#",id:"login",children:[(0,t.jsxs)("div",{className:"flex column",children:[(0,t.jsx)("label",{children:"Email"}),(0,t.jsx)("input",{placeholder:"Put your email here",type:"text",name:"email",value:f,onChange:e=>v(e.target.value)})]}),(0,t.jsxs)("div",{className:"flex column",children:[(0,t.jsx)("label",{children:"Password"}),(0,t.jsx)("input",{placeholder:"Put your password here",type:"password",name:"password",value:w,onChange:e=>N(e.target.value)})]}),(0,t.jsx)("input",{className:"button",type:"submit",value:"Login Here",onClick:e=>{e.preventDefault(),(0,c.j)(f,w,A)}}),(0,t.jsxs)("section",{className:"existingAccount flex column alignStart",children:[(0,t.jsx)("h2",{children:"Don't have an account? Register below:"}),(0,t.jsx)(o.z,{className:"button",text:"Register Here",onClick:e=>S(!y)})]})]})]}),(0,t.jsx)(i.Z,{})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{}),(0,t.jsxs)("section",{id:"auth",className:"main",children:[(0,t.jsx)("h1",{children:"Register Account"}),(0,t.jsxs)("section",{className:"authContainer",children:[(0,t.jsxs)("form",{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{children:[" Name ",e&&a?Z:E]}),(0,t.jsx)("input",{type:"text",name:"name",value:e,placeholder:"Enter your name",onChange:e=>{s(e.target.value),d(x.test(e.target.value))}})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{children:["Email",p&&f?Z:E]}),(0,t.jsx)("input",{type:"email",name:"email",value:f,placeholder:"Enter your email",onChange:e=>{v(e.target.value),g(m.test(e.target.value))}})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{children:["Password",b&&w?Z:E]}),(0,t.jsx)("input",{type:"password",name:"password",value:w,placeholder:"Confirm password",onChange:e=>{N(e.target.value),C(j.test(e.target.value))}})]}),(0,t.jsx)("input",{className:"button",type:"submit",value:"Register Here",onClick:s=>{s.preventDefault(),(0,c.f)(f,w,e,A)},disabled:!p||!a||!b})]}),(0,t.jsxs)("section",{className:"existingAccount flex column alignItems",children:[(0,t.jsx)("h2",{children:"Already have an account? Login below:"}),(0,t.jsx)(o.z,{className:"button",text:"Login Here",onClick:()=>S(!y)})]})]})]}),(0,t.jsx)(i.Z,{})]})})})},1956:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var t=a(7437);a(7330),a(3813);var l=a(4627),n=a(4573),r=a(9787),i=a(3650),o=a(2674),c=a(5688),d=a(2646);function u(){let e=(0,l.o)(e=>e.searchResults),s=(0,n.Z)("auth"),a=e.map((e,a)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.name?e.name:e.playlistName}),(0,t.jsx)("td",{children:e.audio?(0,t.jsx)("button",{className:"button small",onClick:s=>{s.preventDefault(),localStorage.setItem("song",e.$id),window.location.reload()},children:"Play"}):""}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:e.user}),(0,t.jsx)("td",{children:e.audio?(0,t.jsx)(c.Z,{index:a}):"  "}),(0,t.jsx)("td",{children:(null==s?void 0:s.toLowerCase())===e.user&&e.audio?(0,r.z)({text:"",className:"fa-solid fa-trash button small",onClick:s=>(0,d.at)(e.$id,e.cloudinaryId)}):""})]},"".concat(e.$id,"-").concat(e.name)));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{}),(0,t.jsx)("section",{id:"home",className:"main",children:(0,t.jsxs)("div",{id:"tableContainer",children:[(0,t.jsx)("h2",{children:"Search Results"}),e.length?(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Play"}),(0,t.jsx)("th",{}),(0,t.jsx)("th",{children:s?"":"User"}),(0,t.jsx)("th",{children:"Playlist"}),(0,t.jsx)("th",{children:"Delete"})]})}),(0,t.jsx)("tbody",{children:a})]}):(0,t.jsx)("h2",{children:"No Results Match Your Search"})]})}),(0,t.jsx)(o.Z,{})]})}},2674:function(e,s,a){"use strict";a.d(s,{Z:function(){return l}});var t=a(7437);function l(){return(0,t.jsx)("footer",{className:"flex",children:(0,t.jsxs)("nav",{className:"flex",children:[(0,t.jsxs)("ul",{className:"flex icons",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://twitter.com/choir241",className:"fa-brands fa-twitter",children:(0,t.jsx)("p",{className:"hidden",children:"Twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/richard-choir/",className:"fa-brands fa-linkedin",children:(0,t.jsx)("p",{className:"hidden",children:"LinkedIn"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/225kh_drw/?hl=en",className:"fa-brands fa-instagram",children:(0,t.jsx)("p",{className:"hidden",children:"Instagram"})})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/choir27",className:"fa-brands fa-github",children:(0,t.jsx)("p",{className:"hidden",children:"Github"})})})]}),(0,t.jsx)("small",{children:"EchoVerse \xa9 2023. All rights are reserved"})]})})}a(2265)},3650:function(e,s,a){"use strict";a.d(s,{Z:function(){return h}});var t=a(7437),l=a(7138),n=a(1154),r=a(9787),i=a(4627),o=a(23);function c(){let e=(0,i.o)(e=>e.searchValue),s=(0,i.o)(e=>e.setSearchValue),a=(0,i.o)(e=>e.setSearchResults),l=(0,i.o)(e=>e.song),n=(0,i.o)(e=>e.listOfSongs),c=(0,i.o)(e=>e.setSearchDisplay);return(0,t.jsxs)("form",{children:[(0,t.jsx)("input",{type:"search",onChange:e=>s(e.target.value)}),(0,t.jsx)(r.z,{text:"",className:"fa-solid fa-magnifying-glass button",onClick:s=>{s.preventDefault(),function(){let s=[];l.forEach(a=>{var t,l,n;((null==a?void 0:null===(t=a.audio)||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase()))||(null==a?void 0:null===(l=a.name)||void 0===l?void 0:l.toLowerCase().includes(e.toLowerCase()))||(null==a?void 0:null===(n=a.user)||void 0===n?void 0:n.toLowerCase().includes(e.toLowerCase())))&&s.push(a)}),n.forEach(a=>{var t,l;((null==a?void 0:null===(t=a.playlistName)||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase()))||(null==a?void 0:null===(l=a.user)||void 0===l?void 0:l.toLowerCase().includes(e.toLowerCase())))&&s.push(a),a.playlistSongs.forEach(t=>{var l,n,r;let i=JSON.parse(t);((null==i?void 0:null===(l=i.audio)||void 0===l?void 0:l.toLowerCase().includes(e.toLowerCase()))||(null==i?void 0:null===(n=i.name)||void 0===n?void 0:n.toLowerCase().includes(e.toLowerCase()))||(null==i?void 0:null===(r=i.user)||void 0===r?void 0:r.toLowerCase().includes(e.toLowerCase())))&&s.push(a)})}),s.length||(console.log("No Results Match Your Search"),o.Am.error("No Results Match Your Search")),a(s),c(!0)}()}})]})}var d=a(6463),u=a(4573);function h(){async function e(e){try{e.preventDefault(),sessionStorage.removeItem("auth"),await n.Z.deleteCurrentSession(),window.location.reload(),(0,d.redirect)("/")}catch(e){console.error(e)}}let s=(0,i.o)(e=>e.setHeaderDisplay),a=(0,i.o)(e=>e.headerDisplay),o=(0,u.Z)("auth");return(0,t.jsxs)("header",{className:"flex column",id:"header",children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("h1",{children:"EchoStream"})})}),(0,r.z)({text:"",className:"".concat("display"===a?"fa-solid fa-xmark button small hidden":"fa-solid fa-bars button small hidden"),id:"menu",onClick:()=>void("display"===a?s("hidden"):s("display"))}),(0,t.jsx)("nav",{className:"flex column nav ".concat(a),children:(0,t.jsxs)("ul",{className:"flex navBar",children:[(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/about",children:"About"})}),o?(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/account",children:"Account"})}):"",o?(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/addAudio",children:"Add Audio"})}):"",o?(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/",onClick:s=>e(s),children:"Logout"})}):"",o?"":(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/demo",children:"Demo"})}),o?"":(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/login",children:"Login/Register"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c,{})})]})})]})}},178:function(e,s,a){"use strict";a.d(s,{f:function(){return r},j:function(){return i}});var t=a(8999),l=a(1154),n=a(357);async function r(e,s,a,r){try{let i=new t.KU,o=new t.mR(i),c=n.env.NEXT_PUBLIC_PROJECT;i.setEndpoint("https://cloud.appwrite.io/v1").setProject(c),await o.create(t.ID.unique(),e,s,a),sessionStorage.setItem("auth",e),await l.Z.createSession(e,s),r("/")}catch(e){console.error(e)}}async function i(e,s,a){try{await l.Z.createSession(e,s),sessionStorage.setItem("auth",e),a("/")}catch(e){console.error(e)}}},8295:function(e,s,a){"use strict";var t=a(7437),l=a(6463),n=a(4573);s.Z=e=>{let s=s=>{if(!(0,n.Z)("auth"))return(0,t.jsx)(e,{...s});(0,l.redirect)("/")};return e.getInitialProps&&(s.getInitialProps=e.getInitialProps),s}},7330:function(){},3813:function(){}},function(e){e.O(0,[543,884,429,646,971,23,744],function(){return e(e.s=3672)}),_N_E=e.O()}]);