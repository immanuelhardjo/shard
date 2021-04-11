import React from 'react';
import NavBar from './components/NavBar';
import SocialBar from './components/SocialBar';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Shard';
import Projects from './pages/Shard/Projects';
import Stories from './pages/Shard/Stories';
import About from './pages/Shard/About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <SocialBar/>
        <Switch>
          <Route path='/shard/' exact component={Home}/>
          <Route path='/shard/projects' exact component={Projects}/>
          <Route path='/shard/stories' exact component={Stories}/>
          <Route path='/shard/about' exact component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
