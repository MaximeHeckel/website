import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import rootReducer from '../reducer';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      promiseMiddleware(),
      loggerMiddleware
    )
  );

  return store;
}
