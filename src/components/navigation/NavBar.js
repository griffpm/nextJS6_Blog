import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
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
  )
}
