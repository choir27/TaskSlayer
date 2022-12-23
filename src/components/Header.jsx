import {Link} from "react-router-dom"

const Header = () => {

  const regular = 'regularFont'

  return (
    <header>
      <Link to = '/'><h1 className = 'flex justifyContent largeFont'>Illya Fansite</h1></Link>
        <nav className = 'flex' id = 'nav'>
          <ul className = 'flex'>
            <li><Link  className = {regular} to = '/'>Home</Link></li>
            <li><Link  className = {regular} to = '/about'>About</Link></li>
            <li> <Link className = {regular} to = '/gameplay'>Gameplay</Link></li>
            <li> <Link className = {regular} to = '/contact'>Contact</Link></li>
          </ul>
        </nav>


       

    </header>
  )
}

export default Header
