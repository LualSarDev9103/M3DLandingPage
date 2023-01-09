import React from 'react'

//Componentes
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

//CSS
import './cssComponent/body.css'

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