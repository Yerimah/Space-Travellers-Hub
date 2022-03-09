import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragonsFromAPI, cancelReservation, setReservation } from '../../Redux/dragon/dragon';
import styles from './dragon.module.css';

const Dragon = () => {
  const allDragons = useSelector((state) => state.dragonReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragonsFromAPI());
  }, []);

  const handleReservation = (id) => {
    dispatch(setReservation(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div>
      <ul className={styles['dragon-list']}>
        {allDragons.map((dragon) => (

          <li key={dragon.id} type={dragon.type} className={styles['dragon-item']}>
            <div className={styles['item-img-container']}>
              <img src={dragon.images} alt={dragon.name} />
            </div>
            <div className={styles['item-body']}>
              <h3>{dragon.name}</h3>

              {dragon.reserved && <p>reserved</p>}
              {dragon.reserved ? (
                <button
                  id={dragon.id}
                  className={styles.cancelDragon}
                  type="button"
                  onClick={(e) => {
                    cancelReserve(e.target.id);
                  }}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  id={dragon.id}
                  className={styles.button}
                  type="button"
                  onClick={(e) => {
                    handleReservation(e.target.id);
                  }}
                >
                  Reserve Dragon
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dragon;
