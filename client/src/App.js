import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Mailer from "./pages/booking/Mailer";
import Landing from "./pages/landing page/Landing";
import Menu from "./pages/Menu page/Menu";
import About from "./pages/feedback/About";
import Mdk from "./pages/Madhyamik/Mdk";
import Uch from "./pages/uchyamadhyamik/Uch";
import Joint from "./pages/joint/Joint";
import Notice from "./pages/NOTICE/Notice";





import {BrowserRouter as Router,  Routes, Route,  } from "react-router-dom";





function App() {

  return (

    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/feedback" element={<About />} />
        <Route exact path="/about" element={<Menu />} />
        <Route exact path="/madhyamik" element={<Mdk />} />
        <Route exact path="/uchmadhyamik" element={<Uch/>} />
        <Route exact path="/joint" element={<Joint/>} />
        <Route exact path="/notice" element={<Notice/>} />
        <Route  path="/post/:postId" element={<Single />} />
        <Route path="/write"element={<Write />}/>
        <Route path="/Mailer"element={<Mailer />}/>
      
      </Routes>
   
  </Router>



  );
}

export default App;