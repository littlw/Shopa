import { NavLink } from 'react-router-dom';
import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <nav className="avenir menu-container bg-black">
        <div>
          <NavLink to="/" className="f5 NavLink bg-animate white grow hover-bg-light-red dib pa3 ph4-l">
            Home
          </NavLink>
          <NavLink to="/about" className="f5 NavLink bg-animate white grow hover-bg-light-red dib pa3 ph4-l">
            About
          </NavLink>
        </div>
        <div>
          <NavLink to="/shop" className="f5 NavLink bg-animate white grow hover-bg-light-red dib pa3 ph4-l">
            Shop
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
