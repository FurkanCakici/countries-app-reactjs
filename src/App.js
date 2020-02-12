import React from 'react';
import CountryList from './component/CountryList';
import Country from './component/Country';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './layout/Navbar';
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Welcome from './pages/Welcome';




function App() {
  return (
    <div className="container col-12 col-md-10 offset-md-1  col-lg-8 offset-lg-2 ">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={CountryList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/country:name" component={Country} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
