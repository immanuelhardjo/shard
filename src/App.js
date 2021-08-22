import React from 'react';
import NavBar from './components/NavBar';
import SocialBar from './components/SocialBar';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Projects from './pages/Projects';
import Stories from './pages/Stories';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <SocialBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/stories' exact component={Stories}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
