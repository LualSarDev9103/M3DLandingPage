import React from "react"

import { Link }  from "gatsby"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Icons
import {BiPen} from "@react-icons/all-files/bi/BiPen"
import {BiMenu} from "@react-icons/all-files/bi/BiMenu"

//Data
import {
  navLinks
} from "../data/forComponents/navbarData"

//CSS
import {
  logo,
  phoneMenu,
  icon,
  icon_m_phoneMenu,
  icon_m_promoBar,
  navMenu,
  m3dButton,
  mainNavbar,
  link,
  link_m_linkNavMenu,
  promoBar
} from "./cssComponent/globalCSS.module.css"

const Navbar = () => {

  return (
    <nav>
      <div className={mainNavbar}>
        <Link 
          to="/"
          className={link}
        >
          <div className={logo}>
            <StaticImage
              src="../images/LogoIsolated.png"
              alt="pp"
              layout="constrained"
              height={40}
            />
            <span>Manufact3D</span>
          </div>
        </Link>
        <div className={phoneMenu}>
          <BiMenu className={`${icon} + ${icon_m_phoneMenu}`}/>
        </div>
        <div className={navMenu}>
            {navLinks.map((dataLinkNav, keyLinkNav) => (
                <Link 
                  to={dataLinkNav.route}
                  key={keyLinkNav}
                  className={`${link} + ${link_m_linkNavMenu}`}
                >{dataLinkNav.tittle}</Link>
            ))}
        </div>
      </div>
      <div className={promoBar}>
        <BiPen className={`${icon} + ${icon_m_promoBar}`}/>
        <span>¿Qué quieres crear hoy?</span>
        <Link to="/" className={link}>
         <button className={m3dButton}>
           Escríbenos
         </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar