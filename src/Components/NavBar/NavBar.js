import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/planet.png';
import styles from './navBar.module.css'

const NavBar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/dragon',
      text: 'Dragon',
    },
    {
      id: 3,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 4,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <header>
      <div className='logo-container'>
        <img src={logo} className='logo'/>
        <h1>Space traveler's Hub</h1>
      </div>
      <nav>
        <ul>
          {Links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  );
};

export default NavBar;
