import {Link} from "react-router-dom"

const Button = ({domain, cname, size, text, onClick, faType, faStyle}) => {
    return (
        <Link 
            to={domain} 
            className={cname + " " + size + "" + faType + "" + faStyle} 
            onClick = {onClick}
        >
            {text}
        </Link>
    )
}

export default Button