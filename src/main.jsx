import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NameProdiver } from './NameContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NameProdiver>
      <App/>
    </NameProdiver>
  </StrictMode>,
)
