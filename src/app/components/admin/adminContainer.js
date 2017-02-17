import { connect } from 'react-redux';
import { Admin } from './admin';
import * as actions from '../../actions';
import * as selectors from '../../../data/selectors';
import * as appSelectors from '../../selectors';
import data from '../../../data';

export const AdminContainer = connect(state => ({
  newUser: selectors.getNewUser(state),
  saving: appSelectors.getSaving(state),
  users: selectors.getUsers(state),
}), {
  newUserChanged: data.actions.newUserChanged,
  saveUser: actions.saveUser,
})(Admin);
