import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {

        // if (authStatus === true) {
        //   navigate('/')
        // }  else if (authStatus === false) {
        //   navigate('/login')
        // }

        // setLoader(false)
    

       if (authentication && authStatus !== authentication ) {
         navigate('/login')
       } else if (!authentication && authStatus !== authentication){
          navigate('/')
       }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    if (loader) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <p>Loading...</p>
            </div>
        )
    }
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

