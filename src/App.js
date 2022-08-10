import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import LoginForm from "./component/LoginForm";
import SignUpForm from './component/SignUpForm';
import BussinesCard from './component/BusinessCard/BusinessCard';
import AirBNB from './component/AirBNB/AirBNB';
import MemeGenerator from './component/MemeGenerator/MemeGenerator';
import TravelJournel from './component/TravelJournel/TravelJournel';
import Tenzies from './component/Tenzies/Tenzies';
import Quiz from './component/Quiz/Quiz';
import { useState } from "react";
import OnlineCompiler from "./onlineCompiler/OnlineCompiler";
function App() {
  const [islogin, setIslogin]=useState(false);
  const getmsg=()=>{
    setIslogin(true)
  }
  return (
    <div className="App">
       
       <BrowserRouter>
      <div className="navBar">
        <div className="heading">
          <h1>N_Gram</h1>
        </div>
        
        <nav className="navi">
        {islogin && <Link className="item" to="/N_Gram" onClick={()=>{setIslogin(false)}}>Log Out</Link>}
        <Link className="item" to={islogin?"/N_Gram/home":"//N_Gram"}>Home</Link>
        <Link className="item" to="/N_Gram/about">About</Link>
        <Link className="item" to="/N_Gram/contact">Contact</Link>
        </nav>
      </div>
        <Routes>
          <Route path="/N_Gram" element={<LoginForm getmsg={getmsg}/>}/>
          <Route path="/N_Gram/about" element={<About/>}/>
          <Route path="/N_Gram/contact" element={<Contact/>}/>
          <Route path="/N_Gram/signupform" element={<SignUpForm/>}/>
          <Route path="/N_Gram/home" element={<Home/>}/>
          <Route path="/N_Gram/businessCard" element={<BussinesCard/>}/>
          <Route path="/N_Gram/airBNB" element={<AirBNB/>}/>
          <Route path="/N_Gram/travelJournel" element={<TravelJournel/>}/>
          <Route path="/N_Gram/memeGenerator" element={<MemeGenerator/>}/>
          <Route path="/N_Gram/tenzies" element={<Tenzies/>}/>
          <Route path="/N_Gram/quiz" element={<Quiz/>}/>
          <Route path="/N_Gram/onlineCompiler" element={<OnlineCompiler/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
