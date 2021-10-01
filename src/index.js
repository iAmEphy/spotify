import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { originalState } from './components/reducer/reducer';
import reducer from './components/reducer/reducer';
import { DataLayer } from './components/Data/Data.js';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer
      initialState ={ originalState } 
      reducer = {reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
