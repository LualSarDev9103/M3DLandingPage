import React from "react"

//Componentes
import { Link } from "gatsby"

//Data
import {footerData, links} from "../data/forComponents/footerData"

//Icons
import logoIcon from "../images/Logo/logoIsolated.svg";
import logoText from "../images/logo/logoSlabClaro.svg";
import facebookIcon from "../images/icons/facebook.svg";
import instagramIcon from "../images/icons/instagram.svg";
import tiktokIcon from "../images/icons/tiktok.svg";
import linkedInIcon from "../images/icons/linkedIn.svg";
import twitterIcon from "../images/icons/twitter.svg";

//CSS
import {
    footer,
    footer__contenido,
    footer__info,
    footer__links,
    footer__logoLink,
    footer__redSocialLink,
    footer__redSocialIcon,
    footer__contacto,
    footer__copyRight,
    logo,
    footer__logo,
    footer__logo_textM,
    link
} from "./cssComponent/globalCSS.module.css"

const Footer = () => {

    let icon = (e) =>{

        switch(e){
            case "Facebook":
                return(
                    <img src={facebookIcon} alt={e} className={footer__redSocialIcon}/>
                )
            case "Instagram":
                return(
                    <img src={instagramIcon} alt={e} className={footer__redSocialIcon}/>
                )
            case "TikTok":
                return(
                    <img src={tiktokIcon} alt={e} className={footer__redSocialIcon}/>
                )
            case "LinkedIn":
                return(
                    <img src={linkedInIcon} alt={e} className={footer__redSocialIcon}/>
                )

            case "Twitter":
                return(
                    <img src={twitterIcon} alt={e} className={footer__redSocialIcon}/>
                )
            default:
                console.log("Sin icono de red social")
        }
    }

  return (
    <footer className={footer}>
        <div className={footer__contenido}>
            <div className={footer__info}>
                <h4>
                    <Link to="/" className={`${link} + ${footer__logoLink}`}>
                        <img
                            src={logoIcon}
                            alt="Logo Manufact3d"
                            className={`${logo} + ${footer__logo}`}
                        />
                        <img
                            src={logoText}
                            alt="Texto Manufact3d"
                            className={`${logo} + ${footer__logo_textM}`}
                        />
                    </Link>
                </h4>
                <p>
                    {footerData.redesSociales.leyenda}
                </p>
                <div>
                    {footerData.redesSociales.redes.map((red, index)=>
                        <a
                            key={`Red${index}`}
                            href={red.link}
                            className={`${link} + ${footer__redSocialLink}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            {icon(red.tittle)}
                        </a>
                    )}
                </div>
                <div className={footer__contacto}>{/* contacto */}
                    {footerData.contacto.map((info, index) =>
                        <div key={`Contacto${index}`}>
                            {(info.tittle !== "ciudadPais") && <strong>{`${info.tittle}:  `}</strong>}
                            <span>{info.data}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className={footer__links}>{/* links */}
                {links.map((seccion, index)=>
                    <div key={`slf${index}`}>
                        <h4>{seccion.titulo}</h4>
                        <ul>
                            {seccion.enlaces.map((enlace, index)=>
                                <li key={`efl${index}`}>
                                    <Link to={enlace.link} className={link}>
                                        {enlace.nombre}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        <div className={footer__copyRight}> {/* derechos reservados */}
            Copyright © 2023&nbsp;
            <strong>
                <span>Manufact3D</span>
            </strong>
            . Todos los derechos reservados 
        </div>
    </footer>
  )
}

export default Footer