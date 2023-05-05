import Link from 'next/link'
import React from 'react'
import { FiArrowDown } from "react-icons/fi";
import {CiMenuBurger} from "react-icons/ci";


export default function NavBar() {

  return (

    <header>
        <div id='backColor'>

        </div>
        <div id='gradiant'>

        </div>
        
        <nav>
            <div id='nav_content'>
                    <p>Read<span >it</span>.</p>
                    <div id='burger'>
                        <CiMenuBurger className='text-white pt-2' size="2rem" id='burger_menu'/>
                        <p>MENU</p>
                    </div>
                    
                    <div id='menu_content'>
                        <ul>
                        <Link href='/'>
                            <li>Home</li>
                        </Link>

                        <Link href='/about'>
                            <li>About</li>
                        </Link>

                        <Link href='/contact'>
                            <li>Contact</li>
                        </Link>

                        {/* <Link href='/post/22'>
                            <li>Voir Post</li>
                        </Link> */}
                    </ul>
                    </div>
                </div>
            </nav>

        <div id='hero'>
            <div id='hero_content'>
                
                <div id='hero_text'>
                    <h2>Hello! Welcome to</h2>
                    <h1>Readit Blog</h1>
                    <p>Far far away, behind the word mountain, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove at the coast of the Semantics, a large language ocean.</p>
                    <FiArrowDown size='4rem'/>
                </div>
            </div>    
        </div>
        
    </header>
  )
}
