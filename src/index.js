import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AppProfile from './AppProfile';
import reportWebVitals from './reportWebVitals';
import AppCounter from "./AppCounter";
import AppProducts from "./AppProducts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);

reportWebVitals();
