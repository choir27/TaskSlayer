import {Link} from "react-router-dom"

const Header = ({idName, id, setToggleClose, toggleClose, setToggleNav}) => {

	return ( 
		<header id = {id} className = "flex column">

			{
			toggleClose ?
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

			{/* Social Media Links */}

			{/* <ul className = "flex social">
					<li>
						<a 
						rel="noreferrer" 
						target = "_blank" 
						href="https://twitter.com/choir241"
						 className="fa-brands fa-twitter"
						>
							<span className = "hidden">Twitter</span>
						</a>
					</li>

					<li>
						<a 
						rel="noreferrer" 
						target = "_blank" 
						href="https://www.linkedin.com/in/richard-choir/" 
						className="fa-brands fa-linkedin"
						>
							<span className = "hidden">LinkedIn</span>
						</a>
					</li>

					<li>
						<a 
						rel="noreferrer" 
						target = "_blank" 
						href="https://www.instagram.com/225kh_drw/?hl=en" 
						className="fa-brands fa-instagram"
						>
							<span className = "hidden">Instagram</span>
						</a>
					</li>

					<li>
						<a 
						rel="noreferrer" 
						target = "_blank" 
						href="https://github.com/choir27" 
						className="fa-brands fa-github"
						>
							<span className = "hidden">Github</span>
						</a>
					</li>
			</ul> */}

			<ul className = "flex navBar">
    	      	<li><Link to = "/">Home</Link></li>
				<li><Link to = "/about">About</Link></li>
				<li><Link to = "/demo">Demo</Link></li>
				<li><Link to = "/register">Register</Link></li>
				<li><Link to = "/login">Login</Link></li>
			</ul>
			
			</nav>


	
		</header>
	)
}

export default Header;
