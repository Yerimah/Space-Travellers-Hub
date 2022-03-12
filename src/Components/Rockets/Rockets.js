import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRockets, reserveRocket, cancelReserve } from '../../Redux/rockets/rockets';
import styles from './rockets.module.css';

const Rockets = () => {
  const rocketsinfo = useSelector((state) => state.rocketsReducer);

  const dispatch = useDispatch();

  const getRockets = () => {
    if (rocketsinfo.length === 0) {
      dispatch(FetchRockets());
    }
  };

  const rocketBooking = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelBooking = (id) => {
    dispatch(cancelReserve(id));
  };

  useEffect(() => {
    getRockets();
  }, []);

  return (
    <div className={styles.rocketList}>
      {rocketsinfo.map((rocket) => (
        <div key={rocket.rocket_id} className={styles['rocket-card']}>
          <div className={styles['rocket-image']}>
            <img className={styles['rock-img']} src={rocket.rocket_img} alt={rocket.rocket_name} />
          </div>
          <div className={styles['title-desc']}>
            <h2>{rocket.rocket_name}</h2>
            <p className={styles.parag}>
              {rocket.reserved ? (<span className={styles['mini-btn']}>Reserved</span>) : (false)}
              {rocket.rocket_description}
            </p>

            {rocket.reserved ? (
              <button
                onClick={() => cancelBooking(rocket.rocket_id)}
                type="button"
                className={styles['cancel-reserve']}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                onClick={() => rocketBooking(rocket.rocket_id)}
                type="button"
                className={styles['rocket-btn']}
              >
                Reserve Rocket
              </button>

            )}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Rockets;
