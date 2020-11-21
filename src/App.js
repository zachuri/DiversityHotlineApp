import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/AboutUs';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Intro} />
        <Route path='/home' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about-us' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;