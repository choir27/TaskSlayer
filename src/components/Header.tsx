import React, {useMemo, useCallback} from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

interface header{
    idName?: string,
    id?: string,
    toggleClose?: boolean,
    toggleNav?: boolean,
    setToggleNav: (e:boolean) => void,
    setToggleClose: (e:boolean) => void
}

export default function Header(props: header){

    const navigate = useNavigate();	
	const logout = useCallback((e:any) => {
	    e.preventDefault();
		localStorage.removeItem("id");
		navigate("/");	
		if(!localStorage.getItem("id")){
			window.location.reload();
		}
	},[navigate]);	

    useMemo(()=>{
        localStorage.getItem("id") ? props.setToggleNav(true) : props.setToggleNav(false)
      },[props])

	return ( 
        <>

        {localStorage.getItem("auth") ?
        
        <header id = {props.id} className = "flex column">

		{props.toggleClose ?
			<i 
			className="fa-solid fa-x fa-2xl" 
			id ="close"
			onClick = {()=>{
				props.setToggleClose(false);
				props.setToggleNav(true);
			}}></i>
			:
			""
		}

		<div>
			<Link to = "/"><h1>EchoVerse</h1></Link>
	  	</div> 

        <nav id={props.idName} className = "flex column">

			<ul className="flex navBar">
              	<li><Link to="/">Home</Link></li>
				<li><Link to = "/about">About</Link></li>
				<li><Link to = "/account">Account</Link></li>
				<li><Link to = "/addAudio">Add Audio</Link></li>
				<li><Link to = "/" onClick = {(e)=>logout(e)}>Logout</Link></li>
			</ul>

		
		</nav>
		
	</header>
        
        
        
        
        :
        
        <header id = {props.id} className = "flex column">

        {
        props.toggleClose ?
            <i 
            className="fa-solid fa-x fa-2xl" 
            id ="close"
            onClick = {()=>{
                props.setToggleClose(!props.toggleClose);
                props.setToggleNav(!props.toggleNav);
            }}></i>
        :
            ""
        }

        <div>
            <Link to = "/"><h1>EchoVerse</h1></Link>
          </div> 

        <nav id={props.idName} className = "flex column">

        <ul className = "flex navBar">
              <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/demo">Demo</Link></li>
            <li><Link to = "/auth">Register/Login</Link></li>
        </ul>
        
        </nav>

    </header>
        }
        
        </>
		
	)
}

