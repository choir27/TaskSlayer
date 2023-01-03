import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

let Button = ({domain, cname, size, text, onClick}) => {
  return (
<Link to={domain} className={cname + ' ' + size} onClick = {onClick}>{text}</Link>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
  }

export default Button