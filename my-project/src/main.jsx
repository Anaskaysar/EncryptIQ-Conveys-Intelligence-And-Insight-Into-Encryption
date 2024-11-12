// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
