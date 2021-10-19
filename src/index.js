import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalState from './Store/GlobalState';
import Context from './Store/Context'
import './style/global.css'

const Index = () => {
  const globalVaribles = GlobalState();
  return (
    <Context.Provider value = {globalVaribles}>
      <App />
    </Context.Provider>  
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
