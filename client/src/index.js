import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {defaultTheme, Provider} from '@adobe/react-spectrum';
ReactDOM.render(
  <React.StrictMode>
    <Provider theme={defaultTheme} colorScheme="dark">
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
