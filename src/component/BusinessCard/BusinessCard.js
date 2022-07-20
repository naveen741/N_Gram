import './BusinessCard.css';
import About from './About';
import Footer from './Footer';
import Info from './Info';
import Interests from './Interests';
function BussinesCard() {
  return (
    <div className="BusinessCard">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default BussinesCard;
