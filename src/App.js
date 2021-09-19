import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import logo from "./logo.svg";
import "./App.css";
import HeroImage from "./Images/HeroSushiImage.jpg";
import BottomRightImage from "./Images/SushiBottomImage.jpg";
import BottomLeftImage from "./Images/SushiBottomRight.jpg";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <div className="headerText aboutUs">Our Story</div>
          <div>
            <Link to="/signup" className="headerText signup">
              Sign Up
            </Link>
          </div>
          <div className="headerOne">Sushi</div>
          <div className="headerTwo">Wave</div>
          <div className="imageOne">
            <img src={HeroImage} width="626px" height="400px" />
          </div>
          <div className="imageTwo">
            <img src={BottomRightImage} width="223px" />
          </div>
          <div className="imageThree">
            <img src={BottomLeftImage} width="380px" />
          </div>
          <div className="imageThree">
            <img />
          </div>
        </div>
      </Route>
      <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
