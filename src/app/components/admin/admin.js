import React from 'react';
import h from 'react-hyperscript';
import { Panel, Col, Button, Form, FormGroup, FormControl } from 'react-bootstrap';

// import toastr from 'toastr';
import './admin.scss';

export class Admin extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.saveUser = this.saveUser.bind(this);
  }

  render() {
    let bEnableSave = (this.props.newUser !== '');
    const bUserExists = (this.props.users.findIndex(e => this.props.newUser === e.Name) > -1);
    bEnableSave = bEnableSave && !bUserExists;
    bEnableSave = !bEnableSave;

    return (
     h(Panel, { className: 'report-panel-outer' }, [
       h(Col, { sm: 3 }),
       h(Col, { sm: 6 }, [
         h(Panel, { className: 'report-panel-inner' }, [
           h(Form, { className: 'report-form', horizontal: true }, [
             h(FormGroup, { controlId: 'username' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'New User Name:'),
             ]),
             h(FormGroup, { controlId: 'username', validationState: (bUserExists ? 'error' : 'success') }, [
               h(Col, { sm: 12 }, [
                 h(FormControl, { className: 'report-form-text', onChange: this.props.newUserChanged, type: 'text', placeholder: 'Please enter your full name here', value: this.props.newUser }),
               ]),
             ]),
             bUserExists && h(FormGroup, { controlId: 'userexists', validationState: 'error' }, [
               h(Col, { className: 'report-form-label', componentClass: 'ControlLabel', sm: 4 }, 'User already exists.'),
             ]),
             h(FormGroup, { controlId: 'save' }, [
               h(Col, { sm: 2 }, [
                 h(Button, { className: 'report-form-button', type: 'submit', value: 'Save', onClick: this.saveUser, disabled: bEnableSave }, 'Save'),
               ]),
             ]),
           ]),
         ]),
       ]),
       h(Col, { sm: 3 }),
     ])
    );
  }

  saveUser(event) {
    event.preventDefault();

    const user = {
      Name: this.props.newUser,
    };

    this.props.saveUser(user);
    // toastr.success('User added succesfuly');
    // this.context.router.push('/report');
  }
}

// Pull in the React Router context so router is available on this.context.router.
// Admin.contextTypes = {
//   router: React.PropTypes.object,
// };

Admin.propTypes = {
  newUser: React.PropTypes.string.isRequired,
  newUserChanged: React.PropTypes.func.isRequired,
  saveUser: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool.isRequired,
  users: React.PropTypes.arrayOf(Object).isRequired,
};
