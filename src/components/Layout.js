import React from 'react'

//Componentes
import Navbar from './Navbar'
import Footer from './Footer'

//CSS
import './cssComponent/body.css'

const Layout = ( {children} ) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout