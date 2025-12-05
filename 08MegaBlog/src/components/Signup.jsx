import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import Input from './Input'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const create = async(data) => {
     setError('')
       try {
         const createData =  await authService.createAccount(data)
             if (createData) {
              const userData =  await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate('/')
             }
       } catch (error) {
         setError(error.message)
       }
  
    }
  return (
   <div className="group relative inline-block cursor-pointer select-none">
  <div className="px-8 py-3 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 
              text-white font-semibold text-lg rounded-xl shadow-lg
              transform transition-all duration-300
              group-hover:scale-105 group-hover:shadow-2xl">

                <div
                className='flex items-center justify-center w-full'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%'/>
                    </span>
             </div>
                <h2 className='text-2xl font-semibold text-center mb-6'>Create your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?{' '}
                    <Link 
                    to='/login'
                    className='text-blue-200 font-medium hover:underline'
                    >
                    Login
                    </Link>
                </p>
                {error && <p className='text-red-200 text-center mt-4'>{error}</p>}

                <form onSubmit={handleSubmit(create)}
                className='mt-8'>
                <div className='space-y-5'>
                   <Input 
                    label='Name'
                    type='text'
                    placeholder='Enter your name'
                    {...register('name',{required:true})}
                   />
                   <Input 
                    label='Email'
                    type='email'
                    placeholder='Enter your email'
                    {...register('email',{
                        required:true,
                        validate: {
                            matchPatern: (value) =>  /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig.test(value) || 'invalid email address '
                        }
                    })}
                   />
                   <Input 
                    label='Password'
                    type='password'
                    placeholder='Enter your password'
                    {...register('password',{required:true})}
                   />
                </div>

                <div className='mt-8'>
               <Button
               type="submit"
               className="
               w-full py-3 rounded-lg font-semibold 
            bg-blue-600 text-white 
              shadow-md 
            hover:bg-blue-700 
             active:scale-[0.98]
             transition-all duration-300 "
              >
                Create Account
              </Button>

                </div>
                </form> 
    </div>
</div>
  )
}

export default Signup