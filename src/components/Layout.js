import React from 'react'

//Componentes
import Footer from './Footer'
import Header from './Header'

//CSS
import './cssComponent/body.css'

const Layout = ( {children} ) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout