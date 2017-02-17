import h from 'react-hyperscript';
import { Panel } from 'react-bootstrap';
// import toastr from 'toastr';
import './about.scss';

export function About() {
  return (
    h(Panel, { className: 'report-panel-outer', footer: 'Contact: Gil Ziny.' }, 'Some content about Just Surf')
  );
}
