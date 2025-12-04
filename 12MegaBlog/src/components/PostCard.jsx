import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id,title, featuredImage}) {
  return (
   <Link to={$id}>
    <div className='bg-amber-500 rounded-xl p-4 w-full'>
        <div className='w-full justify-center mb-4 '>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
          className='roiunded-xl'/>
        </div>
        <h2
        className='font-bold text-xl'>
          {title}</h2>
    </div>
   </Link>
  )
}

export default PostCard