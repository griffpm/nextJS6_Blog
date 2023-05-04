import React from 'react'
import { HiArrowRight } from "react-icons/hi";

export default function Card({img, title, excerpt, slug}) {
  return (

    <div id='card'>
      <div id='card_img'>
        <img src={img} alt={title}/>
      </div>
      <div id='card_text'>
        <h3>{title}</h3>
        <p id='card_text_excerpt'>{excerpt}</p>
        <div className='flex space-x-4'>
          <HiArrowRight/>
          <p>Read more</p>
        </div>
      </div>
    </div>
  )
}
