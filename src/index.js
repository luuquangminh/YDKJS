import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {
  // BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

// Styles

import configureStore from './configureStore';
import App from './App';


const rootElement = document.getElementById('root');
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

// Run rootSaga


ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  rootElement
);