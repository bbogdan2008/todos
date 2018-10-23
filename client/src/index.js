import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './core/App';
import store from './core/store';

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>, 
  document.getElementById('root')
);

