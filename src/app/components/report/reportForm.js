import React from 'react';
import h from 'react-hyperscript';
// import { Link } from 'react-router';
import { Panel, Col, Button, ButtonToolbar, Form, FormGroup, FormControl } from 'react-bootstrap';
import * as v from '../../../tools/validation';
// import toastr from 'toastr';
import * as Lists from '../../../data/lists';
import './reportForm.scss';

export class ReportForm extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.saveReport = this.saveReport.bind(this);
  }

  render() {
    let bEnableSave = (this.props.user !== '');
    // bEnableSave = bEnableSave && (this.props.dateReported > 0);
    bEnableSave = bEnableSave && (v.DateIsValid(this.props.dateReported));
    bEnableSave = bEnableSave && (this.props.spot !== '');
    bEnableSave = bEnableSave && (this.props.windSpeed > 0);
    bEnableSave = bEnableSave && (this.props.windDirection > 0);
    bEnableSave = bEnableSave && (this.props.swellSize > 0);
    bEnableSave = bEnableSave && (this.props.satisfaction > 0);
    bEnableSave = !bEnableSave;

    return (
     h(Panel, { className: 'report-panel-outer' }, [
       h(Col, { sm: 3 }),
       h(Col, { sm: 6 }, [
         h(Panel, { className: 'report-panel-inner' }, [
           h(Form, { className: 'report-form', horizontal: true }, [
             h(FormGroup, { controlId: 'username' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'Name:'),
             ]),
             h(FormGroup, { controlId: 'username' }, [
               h(Col, { sm: 6 }, [
                 h(FormControl, { className: 'report-form-select', componentClass: 'select', onChange: this.props.userChanged }, [
                   this.props.users.map((user, index) => h('option', { key: index, className: 'report-form-option', value: user.Name, selected: (user.Name === this.props.user) }, user.Name)),
                 ]),
               ]),
             ]),
             h(FormGroup, { controlId: 'date' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'Date:'),
             ]),
             h(FormGroup, { controlId: 'date', validationState: (v.DateIsValid(this.props.dateReported) ? 'success' : 'error'), bsSize: 'sm' }, [
               h(Col, { sm: 6 }, [
                 h(FormControl, { type: 'date', value: this.props.dateReported, onChange: this.props.dateReportedChanged }),
               ]),
             ]),
             h(FormGroup, { controlId: 'spot' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'Spot:'),
             ]),
             h(FormGroup, { controlId: 'spot' }, [
               h(Col, { sm: 6 }, [
                 h(FormControl, { className: 'report-form-select', componentClass: 'select', onChange: this.props.spotChanged }, [
                   Lists.Spots.map((spot, index) => h('option', { key: index, className: 'report-form-option', value: spot.value }, spot.label)),
                 ]),
               ]),
             ]),
             h(FormGroup, { controlId: 'windspeed' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'Wind Speed:'),
             ]),
             h(FormGroup, { controlId: 'windspeed', bsSize: 'sm' }, [
               h(Col, { sm: 12 }, [
                 h(ButtonToolbar, [
                   h(Button, { id: 1, className: 'report-form-button', onClick: this.props.windSpeedChanged, active: (this.props.windSpeed === 1), bsStyle: ((this.props.windSpeed === 1) ? 'info' : 'default') }, '12 - 16'),
                   h(Button, { id: 2, className: 'report-form-button', onClick: this.props.windSpeedChanged, active: (this.props.windSpeed === 2), bsStyle: ((this.props.windSpeed === 2) ? 'info' : 'default') }, '16 - 20'),
                   h(Button, { id: 3, className: 'report-form-button', onClick: this.props.windSpeedChanged, active: (this.props.windSpeed === 3), bsStyle: ((this.props.windSpeed === 3) ? 'info' : 'default') }, '20 - 25'),
                   h(Button, { id: 4, className: 'report-form-button', onClick: this.props.windSpeedChanged, active: (this.props.windSpeed === 4), bsStyle: ((this.props.windSpeed === 4) ? 'info' : 'default') }, '25 - 30'),
                   h(Button, { id: 5, className: 'report-form-button', onClick: this.props.windSpeedChanged, active: (this.props.windSpeed === 5), bsStyle: ((this.props.windSpeed === 5) ? 'info' : 'default') }, '30 - 50'),
                 ]),
               ]),
             ]),
             h(FormGroup, { controlId: 'winddirection' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'Wind Direction:'),
             ]),
             h(FormGroup, { controlId: 'winddirection', bsSize: 'sm' }, [
               h(Col, { sm: 12 }, [
                 h(ButtonToolbar, { className: 'report-form-buttongroup' }, [
                   h(Button, { id: 1, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 1), bsStyle: ((this.props.windDirection === 1) ? 'info' : 'default') }, 'N'),
                   h(Button, { id: 2, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 2), bsStyle: ((this.props.windDirection === 2) ? 'info' : 'default') }, 'NE'),
                   h(Button, { id: 3, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 3), bsStyle: ((this.props.windDirection === 3) ? 'info' : 'default') }, 'E'),
                   h(Button, { id: 4, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 4), bsStyle: ((this.props.windDirection === 4) ? 'info' : 'default') }, 'SE'),
                   h(Button, { id: 5, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 5), bsStyle: ((this.props.windDirection === 5) ? 'info' : 'default') }, 'S'),
                   h(Button, { id: 6, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 6), bsStyle: ((this.props.windDirection === 6) ? 'info' : 'default') }, 'SW'),
                   h(Button, { id: 7, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 7), bsStyle: ((this.props.windDirection === 7) ? 'info' : 'default') }, 'W'),
                   h(Button, { id: 8, className: 'report-form-button', onClick: this.props.windDirectionChanged, active: (this.props.windDirection === 8), bsStyle: ((this.props.windDirection === 8) ? 'info' : 'default') }, 'NW'),
                 ]),
               ]),
             ]),
             h(FormGroup, { controlId: 'swellsize', bsSize: 'sm' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'Swell Size:'),
             ]),
             h(FormGroup, { controlId: 'swellsize', bsSize: 'sm' }, [
               h(Col, { sm: 12 }, [
                 h(ButtonToolbar, [
                   h(Button, { id: 1, className: 'report-form-button', onClick: this.props.swellSizeChanged, active: (this.props.swellSize === 1), bsStyle: ((this.props.swellSize === 1) ? 'info' : 'default') }, '0 - 0.5'),
                   h(Button, { id: 2, className: 'report-form-button', onClick: this.props.swellSizeChanged, active: (this.props.swellSize === 2), bsStyle: ((this.props.swellSize === 2) ? 'info' : 'default') }, '0.5 - 1'),
                   h(Button, { id: 3, className: 'report-form-button', onClick: this.props.swellSizeChanged, active: (this.props.swellSize === 3), bsStyle: ((this.props.swellSize === 3) ? 'info' : 'default') }, '1 - 1.5'),
                   h(Button, { id: 4, className: 'report-form-button', onClick: this.props.swellSizeChanged, active: (this.props.swellSize === 4), bsStyle: ((this.props.swellSize === 4) ? 'info' : 'default') }, '1.5 - 2'),
                   h(Button, { id: 5, className: 'report-form-button', onClick: this.props.swellSizeChanged, active: (this.props.swellSize === 5), bsStyle: ((this.props.swellSize === 5) ? 'info' : 'default') }, '2 - 3'),
                   h(Button, { id: 6, className: 'report-form-button', onClick: this.props.swellSizeChanged, active: (this.props.swellSize === 6), bsStyle: ((this.props.swellSize === 6) ? 'info' : 'default') }, 'higher'),
                 ]),
               ]),
             ]),
             h(FormGroup, { controlId: 'satisfaction', bsSize: 'sm' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 12 }, 'How was your session?'),
             ]),
             h(FormGroup, { controlId: 'satisfaction', bsSize: 'sm' }, [
               h(Col, { sm: 12 }, [
                 h(ButtonToolbar, [
                   h(Button, { id: 1, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 1), bsStyle: ((this.props.satisfaction === 1) ? 'info' : 'default') }, '1'),
                   h(Button, { id: 2, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 2), bsStyle: ((this.props.satisfaction === 2) ? 'info' : 'default') }, '2'),
                   h(Button, { id: 3, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 3), bsStyle: ((this.props.satisfaction === 3) ? 'info' : 'default') }, '3'),
                   h(Button, { id: 4, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 4), bsStyle: ((this.props.satisfaction === 4) ? 'info' : 'default') }, '4'),
                   h(Button, { id: 5, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 5), bsStyle: ((this.props.satisfaction === 5) ? 'info' : 'default') }, '5'),
                   h(Button, { id: 6, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 6), bsStyle: ((this.props.satisfaction === 6) ? 'info' : 'default') }, '6'),
                   h(Button, { id: 7, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 7), bsStyle: ((this.props.satisfaction === 7) ? 'info' : 'default') }, '7'),
                   h(Button, { id: 8, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 8), bsStyle: ((this.props.satisfaction === 8) ? 'info' : 'default') }, '8'),
                   h(Button, { id: 9, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 9), bsStyle: ((this.props.satisfaction === 9) ? 'info' : 'default') }, '9'),
                   h(Button, { id: 10, className: 'report-form-button', onClick: this.props.satisfactionChanged, active: (this.props.satisfaction === 10), bsStyle: ((this.props.satisfaction === 10) ? 'info' : 'default') }, '10'),
                 ]),
                 // h(Pagination, { className: 'report-form-pagination', items: 10 }),
               ]),
             ]),
             h(FormGroup, { controlId: 'freetext' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'Free Text:'),
             ]),
             h(FormGroup, { controlId: 'freetext' }, [
               h(Col, { sm: 12 }, [
                 h(FormControl, { className: 'report-form-text', onChange: this.props.freeTextChanged, type: 'text', placeholder: 'write here your free text', value: this.props.freeText }),
               ]),
             ]),
             h(FormGroup, { controlId: 'save' }, [
               h(Col, { sm: 2 }, [
                 h(Button, { className: 'report-form-button', type: 'submit', value: 'Save', onClick: this.saveReport, disabled: bEnableSave }, 'Save'),
               ]),
             ]),
           ]),
         ]),
       ]),
       h(Col, { sm: 3 }),
     ])
    );
  }

  saveReport(event) {
    event.preventDefault();

    const report = {
      // Id: 1,
      DateReported: this.props.dateReported,
      FreeText: this.props.freeText,
      Satisfaction: this.props.satisfaction,
      Spot: this.props.spot,
      SwellSize: this.props.swellSize,
      User: this.props.user,
      WindSpeed: this.props.windSpeed,
      WindDirection: this.props.windDirection,
    };

    this.props.saveReport(report);
    // toastr.success('Report added succesfuly');
    // this.context.router.push('/');
  }
}

// Pull in the React Router context so router is available on this.context.router.
ReportForm.contextTypes = {
  router: React.PropTypes.object,
};

ReportForm.propTypes = {
  dateReported: React.PropTypes.string.isRequired,
  dateReportedChanged: React.PropTypes.func.isRequired,
  freeText: React.PropTypes.string.isRequired,
  freeTextChanged: React.PropTypes.func.isRequired,
  satisfaction: React.PropTypes.number.isRequired,
  satisfactionChanged: React.PropTypes.func.isRequired,
  saveReport: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool.isRequired,
  spot: React.PropTypes.string.isRequired,
  spotChanged: React.PropTypes.func.isRequired,
  swellSize: React.PropTypes.number.isRequired,
  swellSizeChanged: React.PropTypes.func.isRequired,
  user: React.PropTypes.string.isRequired,
  userChanged: React.PropTypes.func.isRequired,
  users: React.PropTypes.arrayOf(Object).isRequired,
  windDirection: React.PropTypes.number.isRequired,
  windDirectionChanged: React.PropTypes.func.isRequired,
  windSpeed: React.PropTypes.number.isRequired,
  windSpeedChanged: React.PropTypes.func.isRequired,
};
