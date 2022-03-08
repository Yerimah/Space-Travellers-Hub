const BASE_URL = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];
const SET_RESERVATION = 'dragons/dragon/SET_RESERVATION';
const GET_DRAGONS = 'dragons/dragon/GET_DRAGONS';

export const setReservation = (dragonObj, reserved) => {
  const reservedObj = {
    ...dragonObj,
    reserved,
  };

  return ({
    type: SET_RESERVATION,
    payload: reservedObj,
  });
};

export const getDragons = (allDragons) => ({
  type: GET_DRAGONS,
  payload: allDragons,
});

export const getDragonsFromAPI = () => (
  async (dispatch) => {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    const dragonsArray = [];
    result.forEach((x) => {
      const dragonsObject = {
        id: x.id,
        name: x.name,
        type: x.type,
        image: x.flickr_images[0],
      };
      dragonsArray.push(dragonsObject);
    });
    dispatch(getDragons(dragonsArray));
  }
);

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return [...action.payload];
    case SET_RESERVATION:
    {
      const temp = state.filter((dragon) => dragon.id !== action.payload.id);
      return [
        ...temp, action.payload,
      ];
    }

    default:
      return state;
  }
};

export default dragonReducer;
