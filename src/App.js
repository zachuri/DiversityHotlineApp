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
import Valve3 from './pages/valves/v3/Valve3';
import Coaching from './pages/valves/v3/Coaching';
import Success from './pages/valves/v3/Success';
import Mentoring from './pages/valves/v3/Mentoring';
import Mentor1 from './pages/valves/v3/mentors/Mentor1';
import Mentor2 from './pages/valves/v3/mentors/Mentor2';
import Mentor3 from './pages/valves/v3/mentors/Mentor3';
import Mentor4 from './pages/valves/v3/mentors/Mentor4';

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
        <Route path='/coaching' component={Coaching} />
        <Route path='/success' component={Success}/>
        <Route path='/mentoring' component={Mentoring}/>
        <Route path='/mentor1' component={Mentor1}/>
        <Route path='/mentor2' component={Mentor2}/>
        <Route path='/mentor3' component={Mentor3}/>
        <Route path='/mentor4' component={Mentor4}/>
        <Route path='/valve4' component={Valve4} />
      </Switch>
    </Router>
  );
}

export default App;