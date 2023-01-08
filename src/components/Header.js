import React from 'react'

const Header = (props) => {

  const headerData = props.headerData

  return (
    <header>
        <img src={headerData.bannerSRC} alt="" />
        <h1>{headerData.tittle}</h1>
        <p>{headerData.intro}</p>
    </header>
  )
}

export default Header