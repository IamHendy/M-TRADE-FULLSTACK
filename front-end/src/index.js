import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './redux/store'; 
import { render } from '@testing-library/react';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={Store}>  
    <App />
  </Provider>,
  root // Corrected syntax: pass 'root' variable as second argument
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
