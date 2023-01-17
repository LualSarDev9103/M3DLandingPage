import React from 'react'

//Components
import { Link } from 'gatsby'
import Navbar from './Navbar'
/* import Banner from './Banner'; */

//Icons
import logoIcon from "../images/Logo/logoIsolated.svg";
import logoText from "../images/logo/logoSlabOscuro.svg";

//CSS
import {
    header,
    header__contenedor,
    header__logoLink,
    logo,
    header__logo,
    header__logo_textM,
    link
} from "./cssComponent/globalCSS.module.css"

const Header = () => {
  return (
    <header className={header}>
        <div className={header__contenedor}>            
            <Link
                to=""
                className={`${link} ${header__logoLink}`}
            >
                <img
                    src={logoIcon}
                    alt="Logo Manufact3d"
                    className={`${logo} + ${header__logo}`}
                />
                <img
                    src={logoText}
                    alt="Texto Manufact3d"
                    className={`${logo} + ${header__logo_textM}`}
                />
            </Link>
            <Navbar />
        </div>
        {/* <Banner /> */}
    </header>
  )
}

export default Header