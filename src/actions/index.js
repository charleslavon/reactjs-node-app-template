import * as types from '../constants/actionTypes';
import axios from 'axios';



export function fetchNews() {
  const request = axios.get();
  return {type: types.FETCH_NEWS, payload:request};
}
