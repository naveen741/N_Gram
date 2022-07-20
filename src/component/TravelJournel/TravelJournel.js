import './TravelJournel.css';
import data from '../../data/TravelData';
import Travelcard from './Travelcard';
function TravelJournel() {
  return (
    <div className="travelJournel">
      <h1>MyTravel Journel</h1>
        {
          data.map((detail)=>(
            <Travelcard detail={detail}/>
          ))
        }
    </div>
  );
}

export default TravelJournel;
