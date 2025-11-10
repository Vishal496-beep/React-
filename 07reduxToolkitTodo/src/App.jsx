import { useDispatch } from 'react-redux' 
import React from 'react'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-start py-12 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 tracking-tight">
          Redux Toolkit Todo App
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Manage your daily tasks effortlessly ✨
        </p>
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center gap-8">
        <AddTodo />
        <Todos />
      </main>
    </div>
  )
}

export default App
