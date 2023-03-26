import {Link} from "react-router-dom"

const Button = ({domain, cname, size, text, onClick}) => {
    return (
        <Link 
            to={domain} 
            className={cname + " " + size} 
            onClick = {onClick}
        >
            {text}
        </Link>
    )
}

export default Button