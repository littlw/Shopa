import React, { useState } from "react";
import './Header.css';
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { NavLink  } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };


  return (
    <div>
      <nav className="avenir menu flex-item">
        <div className="menu">
          <NavLink to={"/"}
            className="black pa3 f3"
            style={{ textDecoration: 'none', color: 'inherit' }}
            href="/"
          >
            BrandName
          </NavLink>
        </div>
        <div>
          <img
            className="pa3 sidebarimg"
            alt="sidebar"
            src="menu.png"
            onClick={toggleSidebar}
          ></img>
        </div>
      </nav>
      {visible && (
        <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >
         <NavLink to="/">
          <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        </NavLink>
       <NavLink to="/info"> 
        <Menu.Item as='a'>
          <Icon name='info' />
          info
        </Menu.Item></NavLink>
        <NavLink to="signin">
          <Menu.Item as='a'>
          <Icon className="" name='sign-in' />
          Sign in
        </Menu.Item>
        </NavLink>
      </Sidebar>
      )}
    </div>
  );
};

export default Header;
