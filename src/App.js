import React from 'react';
import NavBar from './Components/NavBar';
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
        <Switch>
          <Route path='/' exact components={Home}/>
          <Route path='/projects' exact components={Projects}/>
          <Route path='/stories' exact components={Stories}/>
          <Route path='/about' exact components={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
