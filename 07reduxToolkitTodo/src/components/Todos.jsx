import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center w-full mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight">
        Your Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-base">
          No todos yet — add something! ✨
        </p>
      ) : (
        <ul className="w-full max-w-lg space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-4 transition-all duration-200"
            >
              <span className="text-gray-800 dark:text-gray-200 text-lg font-medium break-words">
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 active:scale-95 transition-all duration-150"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos
