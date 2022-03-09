const BASE_URL = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];
const SET_RESERVATION = 'dragons/dragon/SET_RESERVATION';
const GET_DRAGONS = 'dragons/dragon/GET_DRAGONS';

export const setReservation = (id) => ({
  type: SET_RESERVATION,
  payload: id,
});

export const getDragons = (allDragons) => ({
  type: GET_DRAGONS,
  payload: allDragons,
});

export const getDragonsFromAPI = () => (
  async (dispatch) => {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    console.log('betrand result', result);
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
      return [
        ...state,
        state.map((dragon) => {
          if (dragon.id === action.payload) {
            return {
              ...dragon, reserved: !dragon.reserved,
            };
          }
          return dragon;
        }),
      ];
    default:
      return state;
  }
};

export default dragonReducer;
