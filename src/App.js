import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/AboutUs';
import SignUp from './pages/SignUp';
import Valve1 from './pages/valves/Valve1';
import Valve2 from './pages/valves/Valve2';
import Valve3 from './pages/valves/Valve3';
import Valve4 from './pages/valves/Valve4';

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
        <Route path='/valve1' component={Valve1} />
        <Route path='/valve2' component={Valve2} />
        <Route path='/valve3' component={Valve3} />
        <Route path='/valve4' component={Valve4} />
      </Switch>
    </Router>
  );
}

export default App;