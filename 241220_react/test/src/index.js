import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Class from './241220/Class';
// import Props from './241223/Props';
// import ClassProps from './241223/ClassProps';
// import PropsEx from './241223/PropsEx/PropsEx';
// import PropsEx from './241224/PropsEx/PropsEx';
// import State_ex_01 from './241224/State._ex_01js';
// import State_ex_02 from './241224/State_ex_02';
import State_ex_02 from './241224/ClassState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State_ex_02 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
