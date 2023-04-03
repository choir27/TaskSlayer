import {MyContext} from "./middleware/Context"
import PrivateRoutes from "./middleware/PrivateRoutes"
import PublicRoutes from "./middleware/PublicRoutes"
import { QueryClient, QueryClientProvider} from 'react-query'
import React, {Suspense} from 'react';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter as Router, 
                         Routes, 
                         Route} from 'react-router-dom'
import Spinner from "./components/Spinner"

function App() {
  const queryClient = new QueryClient();


  //Finds currently signed in account user
  const fetchUser = fetch("https://illya-site-backend-production.up.railway.app/api")
    .then(res=>res.json())
    .then(data=>data.find(ele=>ele._id === localStorage.getItem("id")));
  
  const registerUser = async (user) => {
    try{
      const res = await fetch("https://illya-site-backend-production.up.railway.app/register", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Content-type": "application/json"      
        },
        body: JSON.stringify(user)
      });
    
      const data = await res.json();
      localStorage.setItem("id", data.user._id);
      window.location.reload();
    }catch(err){
      console.error(err);
      return;
    }

    }

    const loginUser = async (user) => {
      try{
        const res = await fetch("https://illya-site-backend-production.up.railway.app/login", {
          credentials: "same-origin",
          method: "POST",
          headers: {
            "Content-type": "application/json"     
          },
          body: JSON.stringify(user)
        });
    
        const data = await res.json();
        localStorage.setItem("id", data.user._id);
        window.location.reload();
      }catch(err){
        console.error(err);
        return;
      }
   
    }

    const Home = React.lazy(() => import("./pages/Home"));
    const About = React.lazy(() => import("./pages/About"));
    const Dashboard = React.lazy(() => import("./pages/Dashboard"));
    const Register = React.lazy(() => import("./pages/Register"));
    const Login = React.lazy(() => import("./pages/Login"));
    const Account = React.lazy(() => import("./pages/Account"));
    const EditPlaylist = React.lazy(()=> import("./pages/EditPlaylist"));
    const PostAudio = React.lazy(()=> import("./pages/PostAudio"));
    const PlayMusic = React.lazy(()=> import("./pages/PlayMusic"));

    return (
      <QueryClientProvider client={queryClient}>
      <MyContext.Provider value={fetchUser}>
        <Suspense fallback={<Spinner />}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/playMusic" element={<PlayMusic/>} />
              <Route element = {<PublicRoutes/>}>
                  <Route path="/register" element={<Register onAdd = {registerUser}/>} />
                  <Route path="/login" element={<Login onAdd = {loginUser} />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                  <Route path= "/editPlaylist" element = {<EditPlaylist/>}/>
                  <Route path="/addAudio" element={<PostAudio/>}/>
                  <Route element = {<Account/>} path = "/account"/>
              </Route>
            </Routes>
          </Router>
          <ToastContainer />
        </Suspense>
      </MyContext.Provider>
      </QueryClientProvider>
    );
}

export default App;