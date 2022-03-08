import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonReducer from './dragon/dragon';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';


const reducer = combineReducers({
    dragonReducer, missionsReducer, rocketsReducer
  });
  
  const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
  );
  
  export default store;