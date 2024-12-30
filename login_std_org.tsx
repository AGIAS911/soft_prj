import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './login_std_org'; // Adjust the path to match your file structure

function App() {
  return (
    <div className="select-login">
    <button type="button" className="login-button">Login as a Student</button>
    <button type="button" className="login-button">Login as an Organizer</button>
  </div>
  );
}



export default App;
