import React from 'react'

export default function CardBlog({img, date, author, nbCom, title}) {
  return (
    <div id='CardBlog'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h4>{title}</h4>
            <div className='flex'>
                <p className='flex'>📅<span>{date}</span></p>
                <p className='flex'>👤<span>{author}</span></p>
                <p className='flex'>💬<span>{nbCom}</span></p>
            </div>
        </div>
    </div>
  )
}
