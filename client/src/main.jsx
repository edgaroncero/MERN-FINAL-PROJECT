import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { LoginProvider } from './context/login-context'
import { CartProvider } from './context/cart-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <LoginProvider>
            <Router>
              <App />
           </Router>
         </LoginProvider> 
      </CartProvider> 
  </React.StrictMode>
)
