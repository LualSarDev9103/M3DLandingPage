import React from "react"
import { useState } from "react"

import { Link }  from "gatsby"

//Icons
import mobileMenu from "../images/icons/mobileMenu.svg"
import mobileMenuClose from "../images/icons/close.svg"

//Data
import {
  navLinks
} from "../data/forComponents/navbarData"

//CSS
import {
  navbar,
  navbar__list,
  navbar__list_show,
  navbar__link,
  link,
  navbar__menuIcon
} from "./cssComponent/globalCSS.module.css"

const Navbar = () => {

  const [navbarUlClass, setnavbarUlClass] = useState(navbar__list)  
  const [iconMenuSRC, setIconMenuSRC] = useState(mobileMenu)
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const menuChanges = () =>{
    if (!isMenuClicked){
      setnavbarUlClass(`${navbar__list} ${navbar__list_show}`)
      setIconMenuSRC(mobileMenuClose)
    }
    else{
      setnavbarUlClass(navbar__list)
      setIconMenuSRC(mobileMenu)
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <nav className={navbar}>
      <ul className={navbarUlClass}>
          {navLinks.map((dataLinkNav, keyLinkNav) => (
            <li>
              <Link 
                to={dataLinkNav.route}
                key={keyLinkNav}
                className={`${link} + ${navbar__link}`}
              >{dataLinkNav.tittle}</Link>
            </li>
          ))}
      </ul>
      <img src={iconMenuSRC} alt="Icono menu" className={navbar__menuIcon} onClick={menuChanges} />
    </nav>
  )
}

export default Navbar