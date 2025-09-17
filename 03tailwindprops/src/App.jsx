import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  React from "react";
import './App.css'
import Card from '../components/Card';
function App() {
  const [count, setCount] = useState(0)
  
  let abcObj = {
    userName: 'vishal',
    Email: 'vishal.k08032004@gmail.com'
  }
  let myArr =[1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black dark:text-sky-400 rounded-xl mb-6 text-shadow-lg/30  opacity-100 '>tailwind css</h1>
    <Card userName='chaiaurcode' btnTxt="Click Me"/>
    <Card userName='vikki'  />
    </>
  )
}

export default App
