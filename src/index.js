import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from "./redux/store/configureStore"
import registerServiceWorker from './registerServiceWorker';
import Router from './router/index'
import './style/index.css'
ReactDOM.render((
  <Provider store={store}>
      <Router></Router>
  </Provider>
), document.getElementById("root"));
registerServiceWorker();
