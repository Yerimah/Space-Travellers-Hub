import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragonsFromAPI, setReservation } from '../../Redux/dragon/dragon';
import styles from './dragon.module.css';

const Dragon = () => {
  const dispatch = useDispatch();
  const allDragons = useSelector((state) => state.dragonReducer);

  const toggleHandler = (e) => {
    console.log('the id', e.target);
    dispatch(setReservation(e.target.id));
  };

  useEffect(() => {
    dispatch(getDragonsFromAPI());
  }, []);

  return (
    <div>
      <ul className={styles['dragon-list']}>
        {allDragons.map((dragon) => (

          <li key={dragon.id} id={dragon.id} type={dragon.type} className={styles['dragon-item']}>
            <div className={styles['item-img-container']}>
              <img src={dragon.image} alt={dragon.name} />
            </div>
            <div className={styles['item-body']}>
              <h3>{dragon.name}</h3>
              {dragon.reserved && <p>reserved</p>}

              <button
                id={dragon.id}
                type="button"
                onClick={toggleHandler}
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


// set say our result is an array of objects;
// result = [{id: dragon 1, name: dragon: 1, flickr_image: [imageOne, imageTwo, imagethree], type: 'capsule'}, {}] ======== allDragons


export default Dragon;
