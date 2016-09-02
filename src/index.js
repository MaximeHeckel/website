import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './App';
import Landing from './Landing';
import configureStore from './global/store';

const store = configureStore();

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const routes = (<Route component={App}>
  <Route path="/" component={Landing} />
</Route>);

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
