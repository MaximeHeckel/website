import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './App';
import Landing from './Landing';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const routes = (<Route component={App}>
  <Route path="/" component={Landing} />
</Route>);

ReactDOM.render(
  <Router history={appHistory}>{routes}</Router>,
  document.getElementById('app')
);
