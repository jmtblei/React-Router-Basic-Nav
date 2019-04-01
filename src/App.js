import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/" component={About}></Route>
    <Route exact path="/" component={Contact}></Route>
  </div>
);

export default App;
