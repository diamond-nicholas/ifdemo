import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='navbar'>
      <img src='logo.png' alt='' className='logo' />
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <Link to='/current' className='current'>
          <li>Current account</li>
        </Link>
        <Link to='/savings' className='savings'>
          <li>Savings</li>
        </Link>
        <Link to='/mortgages' className='mortgages'>
          <li>Mortgages</li>
        </Link>
        <Link to='/help' className='help'>
          <li>Help and guidance</li>
        </Link>
        <Link to='/contact' className='contact'>
          <li>Contact us</li>
        </Link>
        <Link to='/login' className='login'>
          <li>Log in</li>
        </Link>
      </ul>
      <button
        className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-bars'></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
