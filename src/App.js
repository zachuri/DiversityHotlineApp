import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './components/pages/Intro';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Intro} />
        <Route path='/home' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about-us' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;