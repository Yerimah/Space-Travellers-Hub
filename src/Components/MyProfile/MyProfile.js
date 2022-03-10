
import { useSelector } from 'react-redux';
import styles from './myProfile.module.css';

const MyProfile = () => {
  const allDragons = useSelector((state) => state.dragonReducer);

  const reservedDragons = allDragons.filter((dragons) => !dragons.reserved !== true);

  return (
    <div className={styles.profile}>
      <div className={styles.box}>
        <h2 className="title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            <tr><td className={styles['title-entry']}>Falcon 1</td></tr>
            <tr><td className={styles['title-entry']}>Falcon 9</td></tr>
            <tr><td className={styles['title-entry']}>Falcon Heavy</td></tr>
            <tr><td className={styles['title-entry']}>Starship</td></tr>
          </tbody>
        </table>
      </div>
      <div className={styles.box}>
        <h2 className="title">My Missions</h2>
        <table className={styles['Mission-ProfileTable']}>
          <tbody>
            <tr><td className={styles['title-entry']}>Thaicom</td></tr>
            <tr><td className={styles['title-entry']}>Telstar</td></tr>
            <tr><td className={styles['title-entry']}>Iridium NEXT</td></tr>
          </tbody>
        </table>
      </div>
      <div className={styles.box}>
        <h2 className="title">My Dragons</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {reservedDragons.map((dragon) => (
              <tr key={dragon.id}>
                <td className={styles['title-entry']}>{dragon.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
import React from 'react';

import { useSelector } from 'react-redux';

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
