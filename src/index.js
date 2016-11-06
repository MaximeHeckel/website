import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Landing from './Landing';
import configureStore from './global/store';

const store = configureStore();

const routes = (<Route component={App}>
  <Route path="/" component={Landing} />
</Route>);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
