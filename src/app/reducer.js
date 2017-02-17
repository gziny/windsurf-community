import { combineReducers } from 'redux';
import * as actions from './actions';

export const saving = (state = false, action) => {
  switch (action.type) {
    case actions.REPORT_SAVING_START:
      return true;
    case actions.REPORT_SAVING_SUCCEDED:
      return false;
    case actions.REPORT_SAVING_FAILED:
      return false;
    case actions.USER_SAVING_START:
      return true;
    case actions.USER_SAVING_SUCCEDED:
      return false;
    case actions.USER_SAVING_FAILED:
      return false;
    default:
      return state;
  }
};


export default combineReducers({
  saving,
});
