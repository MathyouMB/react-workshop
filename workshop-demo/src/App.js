import React from 'react';
import './style/app.scss';
import Navbar from './components/Navbar';
import PhotoPage from './components/PhotoPage';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar bgColor="#0693e3"/>
      <Router>
        <Route path="/home/" component={HomePage} />
        <Route path="/photos/" component={PhotoPage} />
      </Router>
    </div>
  );
}

export default App;
