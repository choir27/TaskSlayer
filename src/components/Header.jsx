import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className = 'header'>
        <h1>Header</h1>
        <Link to = '/'>Home</Link>
        <Link to = '/dashboard'>Dashboard</Link>
    </header>
  )
}

export default Header