import h from 'react-hyperscript';
// import Iframe from 'react-iframe';
import { ResponsiveEmbed, Panel, ControlLabel } from 'react-bootstrap';
import './homePage.scss';

export function HomePage() {
  return (
    h('div', [
      h('div', { style: { width: '100%', height: '30%' } }, [
        h(Panel, [
          h(ControlLabel, 'Bat-Galim Station:'),
        ]),
        h(ResponsiveEmbed, { a16by9: true }, [
          h('embed', { src: 'https://www.windguru.cz/station/468' }),
        ]),
      ]),
      h('div', { style: { width: '100%', height: '30%' } }, [
        h('p'),
        h(Panel, [
          h(ControlLabel, 'Bat-Galim Forcast:'),
        ]),
      ]),
      h('div', { style: { width: '100%', height: '30%' } }, [
        h(ResponsiveEmbed, { a16by9: true }, [
          h('embed', { src: 'https://www.windguru.cz/770' }),
        ]),
      ]),
    ])
  );
}
