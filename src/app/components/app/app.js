import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import h from 'react-hyperscript';
// import { ReportFormContainer } from '../report/reportFormContainer';
import Header from '../common/header';
import './app.scss';

/*
export const App = () => {
  return (
    h('.app',[
      h('.reportForm',[
        h(ReportFormContainer)
      ])
    ])
  );
};
*/


export class App extends React.Component {
  render() {
    return (
        h('.app', { className: 'container-fluid' }, [
          h(Header),
          this.props.children,
        ])
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
