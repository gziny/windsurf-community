import h from 'react-hyperscript';
import { Panel, Col, Carousel } from 'react-bootstrap';
import './gallery.scss';

export function Gallery() {
  return (
    h(Panel, { className: 'report-panel-outer' }, [
      h(Col, { sm: 2 }),
      h(Col, { sm: 8 }, [
        h(Panel, { className: 'report-panel-inner' }, [
          h(Carousel, { interval: 8000 }, [
            h(Carousel.Item, [
              h('img', { src: 'src/images/windsurfing1.gif', style: { width: 900, height: 500, alt: '900x500' } }),
              h(Carousel.Caption, [
                h('h3', 'some photo header'),
                h('p', 'some photo detail'),
              ]),
            ]),
            h(Carousel.Item, [
              h('img', { src: 'src/images/windsurfing2.gif', style: { width: 900, height: 500, alt: '900x500' } }),
              h(Carousel.Caption, [
                h('h3', 'some photo header'),
                h('p', 'some photo detail'),
              ]),
            ]),
            h(Carousel.Item, [
              h('img', { src: 'src/images/windsurfing.jpg', style: { width: 900, height: 500, alt: '900x500' } }),
              h(Carousel.Caption, [
                h('h3', 'some photo header'),
                h('p', 'some photo detail'),
              ]),
            ]),
          ]),
        ]),
      ]),
      h(Col, { sm: 2 }),
    ])
  );
}
