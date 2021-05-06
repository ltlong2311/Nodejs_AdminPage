import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import store1 from './reducers/store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store1}>
    <App/>
  </Provider>,
  document.getElementById('travelTL-admin-page')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
