import React, { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData)) // 👈 If your slice needs {userData}, then use login({userData})
        } else {
          dispatch(logout())
        }
      })
      .catch((err) => {
        console.error("Auth service:", err)
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  // ⛔ Don't return null when loading.
  // ✅ Show a loader or minimal screen.
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
     

        <Header />
        <main className="py-6 px-4 min-h-[80vh]">
          {/* Route components will render here */}
          
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
