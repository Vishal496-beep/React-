import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/* from app.jsx
import { useState } from 'react'  //usestate is hook 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)  //we can give any name in in place of setCounter
 //let counter = 10
 const addValue = () => {
  //counter = counter + 1//1st method 
  //setCounter(counter)
 // setCounter(counter + 1) // second method
 if (counter < 20) {
  setCounter(counter + 1)
   console.log("done");
   */