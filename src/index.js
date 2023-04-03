import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// for bootstrap css goto pulic/index.html
// my custom copy from cdn
// import './assets/css/bootstrap.min.css?v=1';

// npm install bootstrap
// import 'bootstrap/dist/css/bootstrap.css';


// import './assets/css/style.css?v=1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
