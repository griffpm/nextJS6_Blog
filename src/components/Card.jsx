import Link from 'next/link'
import React from 'react'

export default function Card({img, title, excerpt, slug}) {
  return (

    <div className='my-6 mx-4 border-[1px] border-red-500 p-2 '>
      
        <p className='text-bold text-3xl text-red-700 uppercase my-2'>{title}</p>
        <div className='flex space-x-2'>
          <img src={img} alt={title} className='max-w-xs' />
          <p>{excerpt}</p>
        </div>
      
    </div>
  )
}
