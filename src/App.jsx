import Navbar from './Component/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from './Component/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurProducts from './pages/OurProducts';
function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ourProducts" exact component={OurProducts} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/aboutUs" exact component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;




