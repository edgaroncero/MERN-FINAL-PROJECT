import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { LoginProvider } from './context/login-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LoginProvider>
        <Router>
          <App />
       </Router>
     </LoginProvider>  
  </React.StrictMode>
)
