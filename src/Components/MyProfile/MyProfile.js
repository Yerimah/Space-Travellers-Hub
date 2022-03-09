import React from 'react';
import styles from './myProfile.module.css';

const MyProfile = () => (
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
          <tr><td className={styles['title-entry']}>Dragon 1</td></tr>
          <tr><td className={styles['title-entry']}>Dragon 2</td></tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MyProfile;
