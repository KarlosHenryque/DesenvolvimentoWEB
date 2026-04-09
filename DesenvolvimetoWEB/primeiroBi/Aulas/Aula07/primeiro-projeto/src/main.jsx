import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimeiraTela from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeiraTela />
  </StrictMode>,
)
