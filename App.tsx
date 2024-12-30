import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './register'; // Adjust the path to match your file structure
import Login from './login_std_org'; // Import the login_std_org component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="navbar-brand">KASIT Event Handler</div>
            <input type="text" placeholder="Search" className="search-bar" />
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/create-event">Create Event</Link>
              <Link to="/login">Log In</Link> {/* Link to the login_std_org page */}
              <Link to="/register" className="register-button">Register</Link> {/* Link to the register page */}
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<Register />} /> {/* Route for register.tsx */}
            <Route path="/login" element={<Login />} /> {/* Route for login_std_org.tsx */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
