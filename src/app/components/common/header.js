import { Link, IndexLink } from 'react-router';
import h from 'react-hyperscript';
import './header.scss';

function Header() {
  return (
      h('nav', { className: 'jumbotron header' }, [
        h(IndexLink, { to: '/', activeClassName: 'active' }, 'Home'),
        h('span', ' | '),
        h(Link, { to: '/report', activeClassName: 'active' }, 'Report'),
        h('span', ' | '),
        h(Link, { to: '/statistics', activeClassName: 'active' }, 'Statistics'),
        h('span', ' | '),
        h(Link, { to: '/gallery', activeClassName: 'active' }, 'Gallery'),
        h('span', ' | '),
        h(Link, { to: '/admin', activeClassName: 'active' }, 'Admin'),
        h('span', ' | '),
        h(Link, { to: '/about', activeClassName: 'active' }, 'About'),
      ])
    );
}

export default Header;
