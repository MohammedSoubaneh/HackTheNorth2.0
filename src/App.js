import logo from './logo.svg';
import './App.css';
import HeroImage from './Images/HeroSushiImage.jpg';
import BottomRightImage from './Images/SushiBottomImage.jpg';
import BottomLeftImage from './Images/SushiBottomRight.jpg';

function App() {
  return (
    <div className="App">
      <div className="aboutUs">
        Our Story
      </div>
      <div className="headerOne">Sushi</div>
      <div className="headerTwo">Wave</div>
      <div className="imageOne">
        <img src={HeroImage} width='626px' height='400px'/>
      </div>
      <div className="imageTwo">
        <img src={BottomRightImage} width='223px'/>
      </div>
      <div className="imageThree">
        <img src={BottomLeftImage} width='380px' />
      </div>
      <div className="imageThree">
        <img/>
      </div>
    </div>
  );
}

export default App;
