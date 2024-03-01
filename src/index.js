import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { OrderProvider } from './OrderContext';

const rootElement = document.getElementById('root');


ReactDOM.render(

  <OrderProvider>
    <App />
  </OrderProvider>
  ,
  rootElement
);
