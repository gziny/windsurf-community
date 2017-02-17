  import { connect } from 'react-redux';
  import { Statistics } from './statistics';
  import * as selectors from '../../../data/selectors';
  import data from '../../../data';

  export const StatisticsContainer = connect(state => ({
    reports: selectors.getReports(state),
    user: selectors.getUser(state),
    users: selectors.getUsers(state),
  }), {
    userChanged: data.actions.userChanged,
  })(Statistics);
