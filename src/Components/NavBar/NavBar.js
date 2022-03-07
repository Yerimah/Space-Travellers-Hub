import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
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
      <div>
        <img src="" />
        <h1>Space traveler's Hub</h1>
      </div>
      <nav>
        <ul>
          {links.map((link) => {
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>;
          })}
        </ul>
      </nav>
    </header>

  );
};

export default NavBar;
