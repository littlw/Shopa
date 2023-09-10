import { NavLink } from 'react-router-dom';
import React from 'react';

const AdminNavigation = () => {
  return (
    <div className="nav">
      <nav className="avenir menu-container bg-black">
        <div>
          <NavLink to="/admin" className="f5 NavLink bg-animate white grow hover-bg-light-red dib pa3 ph4-l">
            admin
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavigation;