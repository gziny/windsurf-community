import { render } from 'react-dom';
import { Provider } from 'react-redux';
import h from 'react-hyperscript';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import routes from './routes';
// import { App } from './app/components';`
import * as dataActions from './data/actions';
import './styles/index.scss';
//alon green was here
const rootElement = document.querySelector('#app-root');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(dataActions.initialized());

render(
  h(Provider, { store },
    h(Router, { history, routes })  // was h(App)
  ),
  rootElement
  );
