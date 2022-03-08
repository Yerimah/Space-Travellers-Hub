import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsState = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missionsState.filter(
    (missions) => missions.reserved === true,
  );

  return (
    <div>
      <h2>MIssions group</h2>
      <ul>
        {joinedMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}

      </ul>
    </div>
  );
};

export default MyProfile;
