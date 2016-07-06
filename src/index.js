import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import { Router, Route, browserHistory } from 'react-router';

import TwitchWatcher from './app/containers/TwitchWatcher';

import './styles/main.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TwitchWatcher} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
