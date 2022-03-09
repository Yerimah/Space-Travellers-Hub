const ADD_ROCKET = 'spaceTravellers-Hub/redux/rockets/ADD_ROCKET';
const RESERVE_ROCKET = 'spaceTravellers-Hub/redux/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spaceTravellers-Hub/redux/rockets/CANCEL_RESERVATION';
const rocketApi = 'https://api.spacexdata.com/v3/rockets';

const initialstate = [];


export const addRocket = (rockets) => ({
  type: ADD_ROCKET,
  rockets,
});

export const reserveRocket = (rocketId) => ({
    type: RESERVE_ROCKET,
    rocketId,
});

export const cancelReserve = (rocketId) => ({
    type: CANCEL_RESERVATION,
    rocketId
});

export const FetchRockets = () => (async (dispatch) => {
  const response = await fetch(rocketApi);
  const info = await response.json();
  const rocketsArray = [];
  info.forEach((e) => {
    const rocket = {
      rocket_id: e.id,
      rocket_name: e.rocket_name,
      rocket_description: e.description,
      rocket_img: e.flickr_images[0],
      reserved: false
    };
    rocketsArray.push(rocket);
  });
  dispatch(addRocket(rocketsArray));
});

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...action.rockets];
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.rocket_id !== action.rocketId) {
          return rocket;
        }

        return { ...rocket, reserved: true };
      });

      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.rocket_id !== action.rocketId) {
          return rocket;
        }

        return { ...rocket, reserved: false };
      });

      return newState;
    }
        
    default:
      return state;
  }
};

export default reducer;
