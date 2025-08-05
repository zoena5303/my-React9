import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import App from './App0805-1.jsx'
import App from './App0805-2.jsx'
createRoot(document.getElementById('root')).render(
  //嚴謹模式
<StrictMode>
    <App />
  </StrictMode>,
)
