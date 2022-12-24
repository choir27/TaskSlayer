import {Link} from "react-router-dom"

const Header = ({vert}) => {

  return (
    <header id = 'header'>
      <Link style = {vert} to = '/'><h1>Illya Fansite</h1></Link>
        <nav id = 'nav'>
          <ul>
            <li><Link style = {vert} to = '/'>Home</Link></li>
            <li><Link style = {vert} to = '/about'>About</Link></li>
            <li> <Link style = {vert} to = '/gameplay'>Gameplay</Link></li>
            <li> <Link style = {vert} to = '/contact'>Contact</Link></li>
            </ul>

        <ul>
    <li><i className="fa-brands fa-facebook-f"></i></li>
    <li><i className="fa-brands fa-instagram"></i></li>
    <li><i className="fa-brands fa-twitter"></i></li>
    <li><i className="fa-brands fa-github"></i></li>
          </ul>

    
        </nav>
    </header>
  )
}

export default Header
