import {  Link } from "react-router-dom";
function Home(){
    return (
        <div className="Container">
            <ul>
                <li><Link to="/N_Gram/businessCard">BusinessCard</Link></li>
                <li><Link to="/N_Gram/airBNB">AirBNB</Link></li>
                <li><Link to="/N_Gram/travelJournel">TravelJournel</Link></li>
                <li><Link to="/N_Gram/memeGenerator">MemeGenerator</Link></li>
                <li><Link to="/N_Gram/tenzies">Tenzies</Link></li>
                <li><Link to="/N_Gram/quiz">Quizzal</Link></li>
                <li><Link to="/N_Gram/onlineCompiler">OnlineCompiler</Link></li>
            </ul>
            
            
        </div>
    );
}
export default Home;