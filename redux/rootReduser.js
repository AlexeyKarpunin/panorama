import { combineReducers } from 'redux';
import {CHANGE_CITY_ACTION} from './types';

const INIT_CITIES_STATE = {
  city: 'Astrakhan'
}

function city (state=INIT_CITIES_STATE, action) {
  switch (action.type) {
    case CHANGE_CITY_ACTION:
      state.city = action.city;
    return state;
    default :
      return state;
  }
}

const rootReducer = combineReducers({
  city,
});

export default rootReducer;