// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App0819b.jsx'
import './App.css' // 若有樣式就保留，沒有可刪

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
