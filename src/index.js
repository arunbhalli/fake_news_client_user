import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import './style.css';
import { Provider } from 'react-redux';
import store from './state/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';

// axios.defaults.baseURL = 'https://fake-newzzzzz.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:3000/api';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
