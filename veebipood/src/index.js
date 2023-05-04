import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//  npm install react-router-dom - v]tab vajalikud vailid internetist
// panen index.js faili Browser-Router -voimaldab navigeerida
// App.js faili ja looma seosed URLi ja sisu vahel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

