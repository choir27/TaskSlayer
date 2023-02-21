import Footer from "../components/Footer"
import ValidateHeader from "../components/ValidateHeader"

const Dashboard = () => {
  return (
    <div>
      <ValidateHeader />
      <div id = 'main'>
        <section className="major column flex">
        Dashboard
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard