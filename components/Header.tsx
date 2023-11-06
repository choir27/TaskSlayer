import Link from "next/link"
import {redirect} from "next/navigation"
import Session from "../middleware/Session"
import api from "../api/api"
import Search from "./Search"

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

    const auth = Session("auth")

    return(
        <header className = "flex column">
		<div>
			<Link href = "/"><h1>EchoStream</h1></Link>
	  	</div> 

        <nav className = "flex column">

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
