import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from '../app';
import data from '../data';

export default combineReducers({
  app: app.reducer,
  data: data.reducer,
  routing: routerReducer,
});
