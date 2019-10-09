import React from 'react';
import './style/app.scss';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Navbar bgColor="blue"/>
      <div className="app-row-container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
