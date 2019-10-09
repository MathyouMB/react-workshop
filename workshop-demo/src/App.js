import React from 'react';
import './style/app.scss';
import Navbar from './components/Navbar';
import PhotoPage from './components/PhotoPage';
import HomePage from './components/HomePage';
import CountPage from './components/CountPage';
import CountPageCondition from './components/CountPageCondition';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar bgColor="#0693e3"/>
      <Router>
        <Route path="/home/" component={HomePage} />
        <Route path="/photos/" component={PhotoPage} />
        <Route path="/count/" component={CountPage} />
        <Route path="/condition/" component={CountPageCondition} />
      </Router>
    </div>
  );
}

export default App;
