import {redirect} from "next/navigation"
import Session from "../middleware/Session"

const withAuth = Component => {
    const Auth = (props) => {
      // Login data added to props via redux-store (or use react context for example)
    //   const auth = sessionStorage.getItem("auth");
    const auth = Session("auth")
  
      // If user is not logged in, return home component
      if (!auth) {
        redirect("/")
      }else{
    // If user is logged in, return original component
      return (
        <Component {...props} />
      );
      }
  
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;