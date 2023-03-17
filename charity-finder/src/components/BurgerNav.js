import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import "../css/BurgerNav.css"

function BurgerNav() {
  return (
    <div id="burger-nav">
      <a href='/'>
        <img src={require("../media/charity-finder-logo.png")} alt="logo" className='logo'/>
      </a>
      <Menu right>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/about">
          About
        </a>
        <a className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
};

export default BurgerNav;
