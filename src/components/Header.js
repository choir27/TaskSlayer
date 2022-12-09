import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'


const Header = ({title , onAdd, showAdd}) => {

  const location = useLocation()

  return (
    <header className = 'header'>
        <h1>{title}</h1>
        {
        location.pathname === '/' && (
        <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd} />
)}
        {/* <Button color = 'green' text = 'Hello'/>
        <Button color = 'blue' text = 'Hello1'/>
        <Button color = 'red' text = 'Hello2'/> 
        Reuse Component of Button.js to create buttons and input them into html file, dynamically changing the color of the button and the text*/
        }



{/* <h1 style = {{color: 'red'}}>{title}</h1>
        <h2 style = {headingStyle}>This is the title</h2> */
        // if you want to define css in line like above, it needs to be in double brackets
// you can also define styles using an object and call that object with single brackets
}
    </header>
  )
}


//Another way to write the above code, but the above is more clean
// const Header = (props) => {
//     return (
//       <header>
//           <h1>{props.title}</h1>
//       </header>
//     )
//   }

//Defines default prop values so if no prop values are inputed in App.js, the code takes the value from the appropriate object key-value pair
Header.defaultProps = {
    title: 'Task Tracker'
}

//Defines a specific type for the input (string,boolean,integer), and if it doesn't match, will return a warning/error (with defaultProps defined, it will just return the default value)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'blue', backgroundColor: 'red'
// }

export default Header