import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (

    <header className='background: rgb(246,24,185); background: linear-gradient(90deg, rgba(246,24,185,1) 22%, rgba(244,249,32,1) 88%);'>
        <div>
            <ul className='flex justify-center space-x-4'>
                <Link href='/'>
                    <li>Home</li>
                </Link>

                <Link href='/about'>
                    <li>About</li>
                </Link>

                <Link href='/contact'>
                    <li>Contact</li>
                </Link>

                <Link href='/post/22'>
                    <li>Voir Post</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
