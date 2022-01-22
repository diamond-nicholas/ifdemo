import React from 'react';
import './Navbar.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { BsBell } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        {/* nav top */}
        <div className='nav-top'>
          <div className='logo'>
            <img
              src='https://i.pinimg.com/originals/3f/1e/87/3f1e8798a4627a4801656f5b8c061545.png'
              alt=''
            />
          </div>
          <ul className='nav-list'>
            <li className='msg'>
              <div className='iconMsg'>
                <HiOutlineMail />
              </div>
              <p>Message</p>
            </li>
            <li>
              <div className='iconNotif'>
                <BsBell />
              </div>
              <p>Notification</p>
            </li>
            <li>
              <div className='card'>
                <div className='card-body'>
                  <p>Mr. Nick</p>
                  <button className='card-btn'>Log out</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* nav bottom */}
      </div>
    </nav>
  );
};

export default Navbar;
