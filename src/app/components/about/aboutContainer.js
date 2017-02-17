import { connect } from 'react-redux';
import { About } from './about';
import * as selectors from '../../../data/selectors';

export const AboutContainer = connect(state => ({
  users: selectors.getUsers(state),
}), {
})(About);
