import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import saga from './saga';

// Apply the middleware to the store
const routingMiddleware = routerMiddleware(browserHistory);

const loggerMiddleware = createLogger({
  colors: {},
  collapsed: () => true,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  loggerMiddleware,
  sagaMiddleware,
  routingMiddleware
);

const store = createStore(reducer, composeWithDevTools(middleware));

sagaMiddleware.run(saga);

export default store;
