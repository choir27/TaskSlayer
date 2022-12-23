import PropTypes from 'prop-types'

const Button = ({cName, text}) => {
  return (
    <button className = {cName}>{text}</button>  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
  }

export default Button