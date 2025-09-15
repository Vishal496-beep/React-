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
   
 } 
  
 }

const removeValue = () => {
 
  if (counter > 0) { 
    setCounter(counter - 1)
    console.log("removed");
    
  } else{
    console.log('lol');
    
  }
}

  return (
    <>
    <h1>chai or code</h1>
    <h2>counter value : {counter}</h2>

    <button 
    onClick={addValue}> Add Value</button>
    <br />
     <button
     onClick={removeValue}> Remove Value</button>
     <p>footer:</p>

    </>
  )
}

export default App
