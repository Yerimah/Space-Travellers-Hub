import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragonsFromAPI, setReservation } from '../../Redux/dragon/dragon';
import styles from './dragon.module.css';

const Dragon = () => {
  const dispatch = useDispatch();
  const allDragons = useSelector((state) => state.dragonReducer);

  const toggleHandler = (id) => {
    const currentDragon = allDragons.find((dragon) => dragon.id === id);
    dispatch(setReservation(currentDragon, !currentDragon.reserved));
  };

  useEffect(() => {
    dispatch(getDragonsFromAPI());
  }, []);

  allDragons.sort((a, b) => a.id > b.id);

  return (
    <div>
      <ul className={styles['dragon-list']}>
        {allDragons.map((dragon) => (

          <li key={dragon.id} type={dragon.type} className={styles['dragon-item']}>
            <div className={styles['item-img-container']}>
              <img src={dragon.image} alt={dragon.name} />
            </div>
            <div className={styles['item-body']}>
              <h3>{dragon.name}</h3>
              {dragon.reserved && <p>reserved</p>}

              <button
                variant="contained"
                type="button"
                onClick={() => toggleHandler(dragon.id)}
              >
                {(!dragon.reserved ? 'Reserve Dragon' : 'Cancel Reservation')}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dragon;
