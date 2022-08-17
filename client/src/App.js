import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Mailer from "./pages/booking/Mailer";
import Landing from "./pages/landing page/Landing";
import Menu from "./pages/Menu page/Menu";





import {BrowserRouter as Router,  Routes, Route,  } from "react-router-dom";





function App() {

  return (

    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route  path="/post/:postId" element={<Single />} />
        <Route path="/write"element={<Write />}/>
        <Route path="/Mailer"element={<Mailer />}/>
      
      </Routes>
   
  </Router>



  );
}

export default App;