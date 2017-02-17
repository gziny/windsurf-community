
// import React from 'react';
import { connect } from 'react-redux';
// import h from 'react-hyperscript';
import { ReportForm } from './reportForm';
import * as actions from '../../actions';
import * as appSelectors from '../../selectors';
import data from '../../../data';
import * as selectors from '../../../data/selectors';

export const ReportFormContainer = connect(state => ({
  dateReported: selectors.getDateReported(state),
  freeText: selectors.getFreeText(state),
  satisfaction: selectors.getSatisfaction(state),
  saving: appSelectors.getSaving(state),
  spot: selectors.getSpot(state),
  swellSize: selectors.getSwellSize(state),
  user: selectors.getUser(state),
  users: selectors.getUsers(state),
  windDirection: selectors.getWindDirction(state),
  windSpeed: selectors.getWindSpeed(state),
}), {
  dateReportedChanged: data.actions.dateReportedChanged,
  freeTextChanged: data.actions.freeTextChanged,
  satisfactionChanged: data.actions.satisfactionChanged,
  saveReport: actions.saveReport,
  spotChanged: data.actions.spotChanged,
  swellSizeChanged: data.actions.swellSizeChanged,
  userChanged: data.actions.userChanged,
  windDirectionChanged: data.actions.windDirectionChanged,
  windSpeedChanged: data.actions.windSpeedChanged,
})(ReportForm);


/*
export class ReportFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
    };

    this.saveCourse = this.saveCourse.bind(this);
  }

  render() {
    return (
   //  h(ReportForm)
   // h(ReportForm, { satisfaction: this.props.satisfaction })
     h(ReportForm, { ...this.props })
    );
  }

  courseFormIsValid() {
    let formIsValid = true;
    const reportValidationErrors = {};

    if (this.state.windDirection === 0) {
      reportValidationErrors.title = 'Please choode Wind Direction.';
      formIsValid = false;
    }

    if (this.state.windSpeed === 0) {
      reportValidationErrors.title = 'Please choode Wind Speed.';
      formIsValid = false;
    }

    if (this.state.swellSize === 0) {
      reportValidationErrors.title = 'Please choode Swell Size.';
      formIsValid = false;
    }

    if (this.state.satisfaction === 0) {
      reportValidationErrors.title = 'Please choode Satisfaction.';
      formIsValid = false;
    }

    this.setState({ errors: reportValidationErrors });

    return formIsValid;
  }


  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }
  }
}
*/

/*
ReportFormContainer.propTypes = {
  satisfaction: React.PropTypes.number.isRequired,
  satisfactionChanged: React.PropTypes.func.isRequired,
  swellSize: React.PropTypes.number.isRequired,
  swellSizeChanged: React.PropTypes.func.isRequired,
  users: React.PropTypes.arrayOf(Object).isRequired,
  windDirection: React.PropTypes.number.isRequired,
  windDirectionChanged: React.PropTypes.func.isRequired,
  windSpeed: React.PropTypes.number.isRequired,
  windSpeedChanged: React.PropTypes.func.isRequired,
};
*/

/*
export default connect(state => ({
  satisfaction: selectors.getSatisfaction(state),
  swellSize: selectors.getSwellSize(state),
  users: selectors.getUsers(state),
  windDirection: selectors.getWindDirction(state),
  windSpeed: selectors.getWindSpeed(state),
}), {
  satisfactionChanged: data.actions.satisfactionChanged,
  swellSizeChanged: data.actions.swellSizeChanged,
  windDirectionChanged: data.actions.windDirectionChanged,
  windSpeedChanged: data.actions.windSpeedChanged,
})(ReportFormContainer);
*/
