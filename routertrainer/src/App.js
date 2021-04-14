import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Customers from './Customers';
import Trainings from './Trainings';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Personal Trainer!</h1>
      <BrowserRouter >
        <div >
          <Link to="/">Home</Link>{' '}
          <Link to="/customers">Customers</Link>{' '}
          <Link to="/trainings">Trainings</Link>{' '}
          <Link to="/calendar">Calendar</Link>{' '}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/trainings" component={Trainings} />
            <Route path="/calendar" render={() => <h1>This was a test!</h1>} />
            <Route render={() => <h1> Page not found </h1>}/>
          </Switch>
        </div>    
      </BrowserRouter>
    </div>
  );
}

export default App;
