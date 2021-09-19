import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import HeroImage from './Images/HeroSushiImage.jpg';
import BottomRightImage from './Images/SushiBottomImage.jpg';
import BottomLeftImage from './Images/SushiBottomRight.jpg';

import { Modal } from './component/BioModal';
import {useState} from 'react';

function App() {

  const [showBio, setshowBio] = useState(false);

  const transitionVideo = () => {
    setshowBio(prev => !prev);
  };

  return (
  <Route>
    <Route exact path="/">
    <div className="App">
      <div onClick={transitionVideo} className="aboutUs">
        Our Story
      </div>
      <Modal showBio={showBio} transitionVideo={transitionVideo} setshowBio={setshowBio}/>
      <Link to="/signup" className="headerText signup">
      <div className='loginButton'>
        <span>Login</span>
      </div>
      </Link>
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
    </Route>
    <Route exact path="/signup" component={Signup} />
  </Route>
  );
}

export default App;