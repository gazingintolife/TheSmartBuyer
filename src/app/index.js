import configStore from './store/configStore';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './router/App';
import './styles/styles.scss';

const store = configStore()

const app = (
  <Provider store = {store}>
    <App/>
  </Provider>
);

render( app , document.getElementById('app'));
