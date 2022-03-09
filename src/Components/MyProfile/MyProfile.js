import React from 'react';
import RocketsReserved from '../Rockets/RocketsReserved';
import style from './profile.module.css';

const MyProfile = () => (
  <main className={style.container}>
    <div className={style.rockets}>
      <RocketsReserved />
    </div>

  </main>
);

export default MyProfile;
