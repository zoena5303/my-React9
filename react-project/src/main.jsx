// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App0818d.jsx'   // ← 確認路徑與檔名一致

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)



createRoot(document.getElementById('root')).render(
  //嚴謹模式
<StrictMode>
 <HashRouter></HashRouter>
    <App />
  </StrictMode>,
)

App.css