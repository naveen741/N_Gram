import {  Link } from "react-router-dom";
function Home(){
    return (
        <div className="Container">
            <ul>
                <li><Link to="/My_Application_Frontend/businessCard">BusinessCard</Link></li>
                <li><Link to="/My_Application_Frontend/airBNB">AirBNB</Link></li>
                <li><Link to="/My_Application_Frontend/travelJournel">TravelJournel</Link></li>
                <li><Link to="/My_Application_Frontend/memeGenerator">MemeGenerator</Link></li>
                <li><Link to="/My_Application_Frontend/tenzies">Tenzies</Link></li>
                <li><Link to="/My_Application_Frontend/quiz">Quizzal</Link></li>
                <li><Link to="/My_Application_Frontend/onlineCompiler">OnlineCompiler</Link></li>
            </ul>
            
            
        </div>
    );
}
export default Home;