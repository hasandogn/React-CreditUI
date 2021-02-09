import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Home } from "./views/Home";
import { CreditApprove } from "./views/CreditApprove";

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Credit/Approve" exact component={CreditApprove} />
        </Switch>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
