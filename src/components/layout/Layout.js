import React from 'react'
import NavBar from '../navigation/NavBar'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <NavBar/>
            <main>
                {children}
            </main>
        <Footer/>
    </div>
  )
}
