import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { App } from './components/App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // @ts-ignore
  document.getElementById('root'),
);
