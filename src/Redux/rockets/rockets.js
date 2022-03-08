const ADD_ROCKET = 'spaceTravellers-Hub/redux/rockets/ADD_ROCKET';
const rocketApi = 'https://api.spacexdata.com/v3/rockets';

const initialstate = [];

export const addRocket = (rockets) => ({
  type: ADD_ROCKET,
  rockets,
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
    };
    rocketsArray.push(rocket);
  });
  dispatch(addRocket(rocketsArray));
});

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, ...action.rockets];
    default:
      return state;
  }
};

export default reducer;
