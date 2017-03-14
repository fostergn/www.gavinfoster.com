import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/root';
import initialState from './initialState';

export function configureStore() {

  let middleware = [thunk];

  let store = {};
  // Load Chrome Dev Tools Extension if DEV mode
  if (process.env.NODE_ENV !== 'production') {
    const createLogger = require(`redux-logger`);
    const logger = createLogger();
    middleware.push(logger);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, initialState, composeEnhancers(
      applyMiddleware(...middleware)
    ));
  } else {
    store = createStore(reducer, initialState, applyMiddleware(...middleware));
  }

  return store;
}
