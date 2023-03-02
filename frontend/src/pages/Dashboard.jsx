import Footer from "../components/Footer"
import UserHeader from "../components/UserHeader"
import Header from "../components/Header"
import {useContext} from "react"
import {MyContext} from "../App"
const Dashboard = () => {

  const UserContext = useContext(MyContext)
  
  return (
    <div>
      {UserContext ? <UserHeader/> : <Header/>}
      <div id = 'main'>
        <section className="major column flex">
        Dashboard
        {console.log(UserContext)}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard