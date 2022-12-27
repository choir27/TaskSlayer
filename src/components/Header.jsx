import {Link} from "react-router-dom"

const Header = ({vert}) => {

  return ( 
        <nav id="nav">
			<ul className="links">
              	<li><Link style = {vert} to = '/'>Home</Link></li>
              	<li><Link style = {vert} to = '/about'>About</Link></li>
				<li><Link style = {vert} to = '/dashboard'>Dashboard</Link></li>
              	<li><Link style = {vert} to = '/gameplay'>Gameplay</Link></li>
              	<li><Link style = {vert} to = '/media'>Media</Link></li>
			</ul>
			<ul className="icons alt">
				<li><a href="https://twitter.com/choir241" className="icon fa-twitter"></a></li>
				<li><a href="https://www.linkedin.com/in/richard-choir/" className="icon fa-linkedin"></a></li>
				<li><a href="https://www.instagram.com/225kh_drw/?hl=en" className="icon fa-instagram"></a></li>
				<li><a href="https://github.com/choir27" className="icon fa-github"></a></li>
			</ul>
		</nav>
  )
}

export default Header
