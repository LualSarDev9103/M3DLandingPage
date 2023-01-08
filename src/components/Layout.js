import React from 'react'

//Componentes
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ( props ) => {
  return (
    <>
      <Navbar />
      <Header 
        headerData={props.headerData}
      />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout