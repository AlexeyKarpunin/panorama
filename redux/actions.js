/* eslint-disable import/prefer-default-export */
import {CHANGE_CITY_ACTION} from './types';

export function changeCity (city) {
  return {
    type: CHANGE_CITY_ACTION,
    city,
  }
}

