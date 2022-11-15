import React from 'react';
import ReactDOM from 'react-dom/client';
import './basic/css/index.css';
import reportWebVitals from './reportWebVitals';
import AppProducts from "./basic/AppProducts";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProducts/>
  </React.StrictMode>
);

reportWebVitals();
