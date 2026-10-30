import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PersonalPortfolio from './personal/PersonalPortfolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.location.pathname.split('/').includes('personal') ? <PersonalPortfolio /> : <App />}
  </StrictMode>,
)
