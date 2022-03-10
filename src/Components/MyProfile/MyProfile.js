import { useSelector } from 'react-redux';
import styles from './myProfile.module.css';

const MyProfile = () => {
  const allDragons = useSelector((state) => state.dragonReducer);
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missionsState.filter(
    (missions) => missions.reserved === true,
  );

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
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className={styles['title-entry']}>{mission.mission_name}</td>
              </tr>
            ))}
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
    </div>
  );
};

export default MyProfile;
