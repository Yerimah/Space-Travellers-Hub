import React from 'react';
import RocketsReserved from '../Rockets/RocketsReserved';
import style from './profile.module.css';
import { useSelector } from 'react-redux';


const MyProfile = () => (
  <main className={style.container}>
    <div className={style['profile-rockets']}>
    <RocketsReserved />
    </div>
  </main>
)

const MyProfile = () => {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missionsState.filter(
    (missions) => missions.reserved === true,
  );
  return (
    <div className="missions-container">
      <h2 className="missions-header">My Missions</h2>
      <ul className="missions-list">
        {joinedMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}

      </ul>
    </div>
  );
};

export default MyProfile;
