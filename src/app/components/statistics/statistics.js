import React from 'react';
import h from 'react-hyperscript';
import { Panel, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs';
import * as chartOptions from './chartOptions';
import * as chartData from './chartData';
import './statistics.scss';

// const LineChart = require('react-chartjs').Line;
// const PieChart = require('react-chartjs').Pie;

export class Statistics extends React.PureComponent {
  render() {
    return (
      h(Panel, { className: 'report-panel-outer' }, [
        h(Panel, { className: 'report-panel-outer' }, [
          h(Col, { sm: 3 }, [
            h(FormGroup, { controlId: 'username' }, [
              h(ControlLabel, 'Name:'),
            ]),
            h(FormGroup, { controlId: 'username' }, [
              h(FormControl, { className: 'report-form-select', componentClass: 'select', onChange: this.props.userChanged }, [
                this.props.users.map((user, index) => h('option', { key: index, className: 'report-form-option', value: user.Name, selected: (user.Name === this.props.user) }, user.Name)),
              ]),
            ]),
          ]),
        ]),
        h(Panel, { className: 'report-panel-outer' }, [
          h(Col, { sm: 6 }, [
            h(FormGroup, { controlId: 'ReportsPerMonthAsLine' }, [
              (this.props.user !== '') ? h(ControlLabel, 'Reports per month:') : null,
            ]),
            h(FormGroup, { controlId: 'ReportsPerMonthAsLine' }, [
              (this.props.user !== '') ? h(Line, { data: chartData.ReportsPerMonthAsLine(this.props.user, this.props.reports), options: chartOptions.Line, width: '500', height: '250' }) : null,
            ]),
          ]),
          h(Col, { sm: 6 }, [
            h(FormGroup, { controlId: 'ReportsPerSpotAsBar' }, [
              (this.props.user !== '') ? h(ControlLabel, 'Reports per spot:') : null,
            ]),
            h(FormGroup, { controlId: 'ReportsPerSpotAsBar' }, [
              (this.props.user !== '') ? h(Bar, { data: chartData.ReportsPerSpotAsBar(this.props.user, this.props.reports), options: chartOptions.Bar, width: '500', height: '250' }) : null,
            ]),
          ]),
        ]),
        h(Panel, { className: 'report-panel-outer' }, [
          h(Col, { sm: 6 }, [
            h(FormGroup, { controlId: 'ReportsPerMonthAsLine' }, [
              h(ControlLabel, 'Total reports per month:'),
            ]),
            h(FormGroup, { controlId: 'ReportsPerMonthAsLine' }, [
              h(Line, { data: chartData.TotalReportsPerMonthAsLine(this.props.reports), options: chartOptions.Line, width: '500', height: '250' }),
            ]),
          ]),
          h(Col, { sm: 6 }, [
            h(FormGroup, { controlId: 'ReportsPerSpotAsBar' }, [
              h(ControlLabel, 'Total reports per spot:'),
            ]),
            h(FormGroup, { controlId: 'ReportsPerSpotAsBar' }, [
              h(Bar, { data: chartData.TotalReportsPerSpotAsBar(this.props.reports), options: chartOptions.Bar, width: '500', height: '250' }),
            ]),
          ]),
        ]),
      ])
    );
  }
}

Statistics.propTypes = {
  reports: React.PropTypes.arrayOf(Object).isRequired,
  user: React.PropTypes.string.isRequired,
  userChanged: React.PropTypes.func.isRequired,
  users: React.PropTypes.arrayOf(Object).isRequired,
};
