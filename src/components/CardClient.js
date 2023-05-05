import React from 'react'

export default function CardClient({comment, img, nom, job}) {
  return (
    <div id='card_client' className='w-[300px] my-4 border-gray-200 border-[1px] border-solid p-2'>
        <div>
            <p className='text-gray-500'>{comment}</p>
        </div>
        <div className='flex mt-2'>
            <div>
            <img src={img} alt="" className='w-[50px] h-[50px] rounded-full' />
            </div>
            <div className='mx-2'>
                <p>{nom}</p>
                <p className='text-yellow-500'>{job}</p>
            </div>
        </div>
    </div>
  )
}
