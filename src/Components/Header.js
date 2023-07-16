import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Clinic Name
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink c exact className="nav-link" to="/">
                Home
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/complaints">
                Complaints
                </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile/:id">Profile</NavLink>
            </li>
           
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;