// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App0908'
import './App.css' // 有樣式就留，沒有可以刪掉

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
