import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

import { requestRobots, searchRobots } from './reducer';

import App from './Containers/App';
import {createLogger} from 'redux-logger';
import 'tachyons';

const logger = createLogger();
const rootReducers = combineReducers({requestRobots, searchRobots});
const store = createStore(rootReducers, applyMiddleware(thunk,logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
