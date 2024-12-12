import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Team from "./pages/Team";
import Aes from "./pages/Aes";
import Rsa from "./pages/Rsa";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <>
      <div>
       <Header/>
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/team" element={<Team />} />
            <Route path="/aes" element={<Aes/>} />
            <Route path="/rsa" element={<Rsa/>} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default App;
