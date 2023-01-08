import React from "react"
import { Link}  from "gatsby"

//Data
import navLinks from "../data/forComponents/navLinks"

const Navbar = () => {

  return (
    <nav>
        <div className="logoNav"></div>
        <div className="navLinks">
            {navLinks.map((dataLinkNav, keyLinkNav) => (
                <Link to={dataLinkNav.route} key={keyLinkNav}>{dataLinkNav.tittle}</Link>
            ))}
        </div>
        <div className="promoBar">
             <img  src="" alt="" />
             <span>¿Qué quieres crear hoy?</span>
             <Link to="/">
              <button>
                Escríbenos
              </button>
             </Link>
        </div>
    </nav>
  )
}

export default Navbar