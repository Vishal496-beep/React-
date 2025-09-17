import { useState } from 'react'  //usestate is hook 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  const addValue = () => {
   
    if (counter < 20) {
      setCounter(counter + 1)
      // setCounter((prevCounter) = prevCounter + 1)
      // setCounter((prevCounter) = prevCounter + 1) //importan INTERVIEW QUESTION:=> to jump a value from 1 to 4 or 6 
      setCounter(counter + 1)
    }
  }
  const removeValue = () => {
  
    if (counter > 0) {
      setCounter(counter - 1)
      
      
    }
  }


  return (
    <>
  <h1>React counter small project</h1>
  <h2>Total counters: {counter}</h2>
  <button 
  onClick={addValue}> Add Counter : {counter}</button>
  <br />
  <button
  onClick={removeValue}>Remove Count: {counter}</button>

    </>
  )
}

export default App
