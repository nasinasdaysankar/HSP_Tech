import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- 1. Import
import App from './App';
import './index.css'; // or your main css file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- 2. Wrap your <App /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);