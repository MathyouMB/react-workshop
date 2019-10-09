import React from 'react';
import './style/app.scss';
import Navbar from './components/Navbar';
import PhotoPage from './components/PhotoPage';
import HomePage from './components/HomePage';
import CountPage from './components/CountPage';
import CountPageCondition from './components/CountPageCondition';
import APIPage from './components/APIPage';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar bgColor="#0693e3"/>
        <Route path="/home/" component={HomePage} />
        <Route path="/photos/" component={PhotoPage} />
        <Route path="/count/" component={CountPage} />
        <Route path="/condition/" component={CountPageCondition} />
        <Route path="/api/" component={APIPage} />
      </Router>
    </div>
  );
}

export default App;
