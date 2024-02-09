import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles.css'

if (typeof document !== 'undefined') {
  ReactDOM.createRoot(document.getElementById('app')).render(
    <Router>
      <App />
    </Router>
  )
}
