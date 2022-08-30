import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import styles from './navBar.module.css';

const NavBar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/rockets',
      text: 'Rockets',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 4,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 5,
      path: '/summary',
      text: 'Summary',
    },
  ];
  return (
    <header>
      <div className={styles['header-container']}>
        <div className={styles['logo-container']}>
          <NavLink to="/"><img src={logo} className={styles.logo} alt="STH logo" /></NavLink>
        </div>
      </div>
      <nav>
        <ul>
          {Links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
