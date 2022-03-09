import React from 'react';
import { useSelector } from 'react-redux';

const RocketsReserved = () => {
  const selectedRockets = useSelector((state) => state.rockets);

  const reservedRockets = selectedRockets.filter((rocket) => rocket.reserved === true);
  
  return (
    <div className="profile-container">
      <h4>My Reserved Rockets</h4>
      {
reservedRockets.map((rocket) => (
  <div key={rocket.rocket_id}>
    <p>{rocket.rocket_name}</p>
  </div>
))
}
    </div>
  );
};

export default RocketsReserved;