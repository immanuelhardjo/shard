import React from 'react';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact components={Home}/>
          <Route path='/' exact components={Home}/>
          <Route path='/' exact components={Home}/>
          <Route path='/' exact components={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
