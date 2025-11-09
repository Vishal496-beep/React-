import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/ContextTodo'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

 const addTodo = (todo) => {
    setTodos((prevtodo) => [{id: Date.now(), ...todo},...prevtodo])
  }

 const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

 const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== id))
  }

 const toggleComplete = (id) => {
  setTodos((prevTodos) =>  prevTodos.map((prev) => prev.id === id ? { ...prev, completed: !prev.completed } : prev
    )
  );
};

  useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length > 0){
          setTodos(todos)
        }
   }, [])

   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos))
   }, [todos])
   




  return (
  <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
             <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                 <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key={todo.id}> 
                  
                      <TodoItem todo={todo} />
                    </div>
                  ))}
                 </div>
                     </div>
          </div>
    </TodoProvider>
  )
}

export default App
