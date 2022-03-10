const BASE_URL = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];
const SET_RESERVATION = 'dragons/dragon/SET_RESERVATION';
const GET_DRAGONS = 'dragons/dragon/GET_DRAGONS';
const CANCEL_RESERVATION = 'dragons/dragon/CANCEL_RESERVATION';

export const getDragons = (allDragons) => ({
  type: GET_DRAGONS,
  payload: allDragons,
});

export const setReservation = (id) => ({
  type: SET_RESERVATION,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const getDragonsFromAPI = () => async (dispatch) => {
  const response = await fetch(BASE_URL);
  const result = await response.json();

  const mappedDragons = result.map((myDragon) => {
    const {
      id, name, type, flickr_images: images,
      reserved = false,
    } = myDragon;

    return {
      id, name, type, images, reserved,
    };
  });
  dispatch(getDragons(mappedDragons));
};

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.payload;

    case SET_RESERVATION: {
      const currentState = state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: !dragon.reserved };
        }
        return dragon;
      });
      return currentState;
    }

    case CANCEL_RESERVATION:
    {
      const cancelState = state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: !dragon.reserved };
        }
        return dragon;
      });
      return cancelState;
    }

    default:
      return state;
  }
};

export default dragonReducer;
