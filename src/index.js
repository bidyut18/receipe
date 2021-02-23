import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as dotenv from 'dotenv'
import * as serviceWorker from './serviceWorker';
dotenv.config()
console.log(process.env.REACT_APP_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
