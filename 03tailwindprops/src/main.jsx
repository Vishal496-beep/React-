import  React  from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//IMPORTANT FOR INTERVIEW PERSPECTIVE
// Virtual DOM = the “blueprint” React works with in memory.

// Reconciliation = the process of comparing old VDOM with new VDOM.

// Fiber = the upgraded system that makes reconciliation efficient and interruptible.