import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput(" ")
  }

  return (
    <div className="flex justify-center items-center w-full mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 bg-white shadow-lg rounded-2xl p-4 w-full max-w-lg border border-gray-200 transition-all duration-300 hover:shadow-xl"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="✍️ Add your new todo..."
          className="flex-1 px-4 py-2 text-gray-700 text-base rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          aria-label="Add a new todo"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 active:scale-95 transition-transform duration-150"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddTodo
