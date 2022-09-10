//import logo from './logo.svg';
import './App.css';
import Footerr from './Component/Footer/Footerr';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages';
import About from './Pages/about';
import Services from './Pages/services';
import Contact from './Pages/contact';
import SignUp from './Pages/signup';

function App() {
  return (
    <div className="App">
      {/* <div className="content-wraper"> 
        
      </div> */}
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
      <Footerr/>
    </div>
  );
}

export default App;
