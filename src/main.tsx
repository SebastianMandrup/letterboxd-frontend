import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './indexTemp'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
