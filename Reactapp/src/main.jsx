import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter basename='/PortfolioReact-1/reactapp'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
