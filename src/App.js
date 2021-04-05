import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home  from './components/pages/HomePage/Home'
import Services from'./components/pages/HomePage/Services'
import AboutUs from'./components/pages/HomePage/AboutUs'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component ={Home}/>
        <Route path='/services' exact component ={Services}/>
        <Route path='/about-us' exact component ={AboutUs}/>
      </Switch>
    </Router>
  );
}

export default App;
