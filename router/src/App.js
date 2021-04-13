import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <BrowserRouter >
        <div >
          <Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/links">Links</Link>{' '}
          <Link to="/test">Test text for link</Link>{' '}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/links" render={() => <h1>No links yet</h1>} />
            <Route path="/Test" render={() => <h1>This was a test!</h1>} />
            <Route render={() => <h1> Page not found </h1>}/>
          </Switch>
        </div>    
      </BrowserRouter>
    </div>
  );
}

export default App;
