import DashboardAuth from "./DashboardAuth"
import DashboardGuest from "./DashboardGuest"

const Dashboard = () => {
  return (
   localStorage.getItem("id") ? <DashboardAuth/> : <DashboardGuest/>
  );
}

export default Dashboard