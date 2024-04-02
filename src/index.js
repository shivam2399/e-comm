import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './Store/CartProvider.js';
import { AuthContextProvider } from './Store/auth-context.js';

import '../node_modules/react-bootstrap/dist/react-bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
   <CartProvider>
    <React.StrictMode>
     <App />
    </React.StrictMode>
   </CartProvider>
  </AuthContextProvider>
);

