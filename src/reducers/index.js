import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import fetchNews from './fetchNewsReducer';



const rootReducer = combineReducers({
  fetchNews,
  routing: routerReducer
});

export default rootReducer;
