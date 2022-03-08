/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, toggleJoinMissions } from '../../Redux/missions/missions';
import styles from './missions.module.css';

let fetched = false;
const Missions = () => {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMissions());
      fetched = true;
    }
  }, []);

  const clickHandler = (e) => {
    const buttonId = e.target.getAttribute('data-target');
    dispatch(toggleJoinMissions(buttonId));
  };

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missionsState.map(
          ({
            mission_name: missionName,
            mission_id,
            description,
            reserved,
          }) => (
            <tr key={mission_id}>
              <td className={styles.missionName}>{missionName}</td>
              <td>{description}</td>
              <td>
                <p>{reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</p>
              </td>
              <td key={mission_id}>
                <button
                  data-target={mission_id}
                  key={mission_id}
                  type="button"
                  onClick={clickHandler}
                >
                  {reserved ? 'Leave MIssion' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Missions;
