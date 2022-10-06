import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-logo'><Link to="/"><img src="/images/logo_makers.svg" alt="" /></Link></div>
        <ul className='nav-links'>
          <li><Link to="/users">users</Link></li>
          <li><Link to="/rooms">rooms</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;