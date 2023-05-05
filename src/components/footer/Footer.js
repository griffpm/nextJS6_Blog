import React from 'react'
import { AiFillCopyrightCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/Ai";
import { BsChevronRight, BsFacebook, BsTelephone } from "react-icons/Bs";
import { SlEnvolope } from "react-icons/sl";
import { TfiLocationPin } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer>
    <div id='foot_content'>
        <div id='foot1'>
          <div className='foot11'>
            <h2 className='py-4'>Read<span>it</span></h2>
            <p className='py-2'>Far far away, behind the word mountain, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='flex py-2'>
              <AiFillTwitterCircle size='50px' className='mx-4'/>
              <BsFacebook size='50px' className='mx-4'/>
              <AiFillInstagram size='50px' className='mx-4'/>
            </div>
          </div>
          <div className='foot11'>
            <h3 className='py-4'>Latest News</h3>


          </div>
          <div className='foot11'>
            <h3 className='py-4'>Informations</h3>
            <ul className='py-2'>
              <li className='py-2 flex'><BsChevronRight className='mt-1 mr-2'/> Home</li>
              <li className='py-2 flex'><BsChevronRight className='mt-1 mr-2'/> About</li>
              <li className='py-2 flex'><BsChevronRight className='mt-1 mr-2'/> Article</li>
              <li className='py-2 flex'><BsChevronRight className='mt-1 mr-2'/> Contact</li>
            </ul>
          </div>
          <div className='foot11'>
            <h3 className='py-4'>Have a question?</h3>
            <div className='py-2 flex space-x-2'>
              <TfiLocationPin className='mt-2 mr-4'/>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className='py-2 flex space-x-2'>
              <BsTelephone className='mt-2 mr-4'/>
              <p>+2 392 3929 210</p>
            </div>
            <div className='py-2 flex space-x-2'>
              <SlEnvolope className='mt-2 mr-4'/>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
        <div id='foot2' className='flex justify-center' >
          <p className='flex text-[1.5rem]'>Copyright <span><AiFillCopyrightCircle className='mt-2 mx-2'/></span>2023 All rights reserved | This template is made with ❤️ by Colorlib</p>
        </div>
    </div>
    </footer>
  )
}
