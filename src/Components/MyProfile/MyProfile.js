import React from 'react';
import { useSelector } from 'react-redux';
import RocketsReserved from '../Rockets/RocketsReserved';
import style from './profile.module.css';

const MyProfile = () => {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missionsState.filter(
    (missions) => missions.reserved === true,
  );
  return (
    <main className={style.container}>
      <div className={style['profile-rockets']}>
        <RocketsReserved />
      </div>

      <div className="missions-container">
        <h2 className="missions-header">My Missions</h2>
        <ul className="missions-list">
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}

        </ul>
      </div>
    </main>
  );
};

export default MyProfile;
