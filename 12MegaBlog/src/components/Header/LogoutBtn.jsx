import React from 'react'
import {useDispatch} from 'react-redux'
import authService from "../../appwrite/auth"
import {logout} from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
     authService.logout().then(() => {
      dispatch(logout())
     })
  }
  return (
    <button
    className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg 
             shadow-sm transition-all duration-200 active:scale-95"'
             onClick={logoutHandler}
    >LogoutBtn</button>
  )
}

export default LogoutBtn