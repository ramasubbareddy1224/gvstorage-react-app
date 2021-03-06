import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {AppRoutes} from './routes';
import { Provider } from 'react-redux';
import {store} from './store/configureStore';


ReactDOM.render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
