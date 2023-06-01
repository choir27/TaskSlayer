import {Link, 
		useNavigate} from "react-router-dom"
import {useCallback} from "react"

const UserHeader = ({idName, id ,setToggleClose, toggleClose, setToggleNav}) => {

	const navigate = useNavigate();	
	const logout = useCallback((e) => {
		e.preventDefault();
		localStorage.removeItem("id");
		navigate("/");	
		if(!localStorage.getItem("id")){
			window.location.reload();
		}
	},[navigate]);	

	return ( 
	<header id = {id} className = "flex column">

		{toggleClose ?
			<i 
			className="fa-solid fa-x fa-2xl" 
			id ="close"
			onClick = {()=>{
				setToggleClose(false);
				setToggleNav(true);
			}}></i>
			:
			""
		}

		<div>
			<Link to = "/"><h1>EchoVerse</h1></Link>
	  	</div> 

        <nav id={idName} className = "flex column">

			<ul className="flex navBar">
              	<li><Link to="/">Home</Link></li>
				<li><Link to = "/about">About</Link></li>
				<li><Link to = "/account">Account</Link></li>
				<li><Link to = "/addAudio">Add Audio</Link></li>
				<li><Link to = "/" onClick = {(e)=>logout(e)}>Logout</Link></li>
			</ul>

		
		</nav>
		
	</header>
  )

}

export default UserHeader