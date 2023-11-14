"use client"
import Link from "next/link"
import api from "../api/api"
import Search from "./Search"
import {redirect} from "next/navigation"
import Session from "../middleware/Session"
import {Button} from "../components/Button"
import {useStore} from "../middleware/Zustand"
import {Action, State} from "../middleware/Type"

export default function Header(){
	async function handleLogout(e){
        try{
            e.preventDefault();
            sessionStorage.removeItem("auth");
            await api.deleteCurrentSession();
            window.location.reload();
            redirect("/");
        }catch(err){    
            console.error(err);
        }
	};

    function toggleNavMenu(){
        if(headerDisplay === "display"){
            setHeaderDisplay("hidden")
        }else{
            setHeaderDisplay("display")
        }
    }

    const setHeaderDisplay = useStore((state: Action)=>state.setHeaderDisplay);
    const headerDisplay = useStore((state:State)=>state.headerDisplay);

    const auth = Session("auth")
 
    const menuToggle = `${headerDisplay === "display" ? "fa-solid fa-xmark button small hidden" : "fa-solid fa-bars button small hidden"}`;

    return(
        <header className = "flex column" id = "header">
		<div>
			<Link href = "/"><h1>EchoStream</h1></Link>
	  	</div> 

        {Button({text: "", className: menuToggle, id: "menu", onClick: ()=>toggleNavMenu()})}

        <nav className = {`flex column nav ${headerDisplay}`}>

            <ul className="flex navBar">
                <li><Link href="/">Home</Link></li>
                <li><Link href= "/about">About</Link></li>
                {auth ? <li><Link href= "/account">Account</Link></li> : ""}
                {auth ? <li><Link href= "/addAudio">Add Audio</Link></li> : ""}
                {auth ? <li><Link href = "/" onClick = {(e)=>handleLogout(e)}>Logout</Link></li> : ""}
                {auth ? "" : <li><Link href = "/demo">Demo</Link></li>}
                {auth ? "" : <li><Link href = "/login">Login/Register</Link></li>}
                <li><Search/></li>
            </ul>

        </nav>
        </header>
    )
}
