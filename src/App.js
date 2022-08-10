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
        {islogin && <Link className="item" to="/My_Application_Frontend" onClick={()=>{setIslogin(false)}}>Log Out</Link>}
        <Link className="item" to={islogin?"/My_Application_Frontend/home":"/My_Application_Frontend"}>Home</Link>
        <Link className="item" to="/My_Application_Frontend/about">About</Link>
        <Link className="item" to="/My_Application_Frontend/contact">Contact</Link>
        </nav>
      </div>
        <Routes>
          <Route path="/My_Application_Frontend" element={<LoginForm getmsg={getmsg}/>}/>
          <Route path="/My_Application_Frontend/about" element={<About/>}/>
          <Route path="/My_Application_Frontend/contact" element={<Contact/>}/>
          <Route path="/My_Application_Frontend/signupform" element={<SignUpForm/>}/>
          <Route path="/My_Application_Frontend/home" element={<Home/>}/>
          <Route path="/My_Application_Frontend/businessCard" element={<BussinesCard/>}/>
          <Route path="/My_Application_Frontend/airBNB" element={<AirBNB/>}/>
          <Route path="/My_Application_Frontend/travelJournel" element={<TravelJournel/>}/>
          <Route path="/My_Application_Frontend/memeGenerator" element={<MemeGenerator/>}/>
          <Route path="/My_Application_Frontend/tenzies" element={<Tenzies/>}/>
          <Route path="/My_Application_Frontend/quiz" element={<Quiz/>}/>
          <Route path="/My_Application_Frontend/onlineCompiler" element={<OnlineCompiler/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
