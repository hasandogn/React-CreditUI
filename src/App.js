import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Home} from './views/Home';
import {CreditApprove} from './views/CreditApprove';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Credit/Approve' exact component={CreditApprove} />
      </Switch>
    </Router>
      
        
  );
}

export default App;
