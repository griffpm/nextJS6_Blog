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
                <p>📅{date}</p>
                <p>👤{author}</p>
                <p>💬{nbCom}</p>
            </div>
        </div>
    </div>
  )
}
