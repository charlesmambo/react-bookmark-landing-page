import React from 'react';
import './App.css';
import logo from './images/logo-bookmark.svg';

 function Header() {
  return (
    <div className='Header'>
       <div className='Navbar'>
         <a href='#'><img src={logo} alt="main logo" /></a>
            <ul className='nav-item'>
              <li>
                <a href=''>features</a>
              </li>
              <li>
                <a href=''>Pricing</a>
              </li>
              <li>
                <a href=''>Contact</a>
              </li>
              <div className='nav-btn'>
                <button>login</button>
            </div>
            </ul>     
       </div>
    </div>
  )
}

export default Header;
