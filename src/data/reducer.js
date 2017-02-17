import { combineReducers } from 'redux';
import * as actions from './actions';
import * as appActions from '../app/actions';

const d = new Date();
const day = d.getDate();
const currday = (day < 10) ? `0${day}` : day;
const month = (d.getMonth() + 1);
const currmonth = (month < 10) ? `0${month}` : month;
const curryear = d.getFullYear();
const currdate = `${curryear}-${currmonth}-${currday}`;

export const reports = (state = [], action) => {
  switch (action.type) {
    case actions.GET_INIT_REPORTS_REQUEST_SUCCEEDED:
      return action.payload;
    case actions.GET_REPORT_REQUEST_SUCCEEDED:
      return action.payload;
    case actions.GET_REPORTS_REQUEST_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};

export const report = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const users = (state = [], action) => {
  switch (action.type) {
    case actions.GET_INIT_USERS_REQUEST_SUCCEEDED:
      return action.payload;
    case actions.GET_USER_REQUEST_SUCCEEDED:
      return action.payload;
    case actions.GET_USERS_REQUEST_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};

export const user = (state = '', action) => {
  switch (action.type) {
    case actions.USER_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const newUser = (state = '', action) => {
  switch (action.type) {
    case appActions.USER_SAVING_SUCCEDED:
      return '';
    case actions.NEW_USER_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const dateReported = (state = currdate, action) => {
  switch (action.type) {
    case appActions.REPORT_SAVING_SUCCEDED:
      return currdate;
    case actions.DATE_REPORTED_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const spot = (state = '', action) => {
  switch (action.type) {
    case appActions.REPORT_SAVING_SUCCEDED:
      return '';
    case actions.SPOT_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const windDirection = (state = 0, action) => {
  switch (action.type) {
    case appActions.REPORT_SAVING_SUCCEDED:
      return 0;
    case actions.WIND_DIRECTION_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const windSpeed = (state = 0, action) => {
  switch (action.type) {
    case appActions.REPORT_SAVING_SUCCEDED:
      return 0;
    case actions.WIND_SPEED_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const swellSize = (state = 0, action) => {
  switch (action.type) {
    case appActions.REPORT_SAVING_SUCCEDED:
      return 0;
    case actions.SWELL_SIZE_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const satisfaction = (state = 0, action) => {
  switch (action.type) {
    case appActions.REPORT_SAVING_SUCCEDED:
      return 0;
    case actions.SATISFACTION_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export const freeText = (state = '', action) => {
  switch (action.type) {
    case appActions.REPORT_SAVING_SUCCEDED:
      return '';
    case actions.FREETEXT_CHANGED:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  reports,
  report,
  users,
  user,
  newUser,
  dateReported,
  satisfaction,
  spot,
  swellSize,
  windDirection,
  windSpeed,
  freeText,
});
