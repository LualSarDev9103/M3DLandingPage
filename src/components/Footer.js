import React from "react"
import {StaticImage} from "gatsby-plugin-image"

//Data
import footerData from "../data/forComponents/footerData"

//CSS
import {
    footer,
    logo,
    link
} from "./cssComponent/globalCSS.module.css"

const Footer = () => {
  return (
    <footer className={footer}>
        <div className={logo}>
            <StaticImage 
                src="../images/logoIsolated.png"
                alt="Logo Manufact3d"
            />
            <span>{footerData.logo.logoTittle}</span>
        </div>

        <div className="contactoFooter">
            {footerData.contacto.map((info, index) =>
                <div key={`Contacto${index}`}>
                    {info.iconSRC && <img src={info.iconSRC} alt={info.tittle} />}
                    <span>{info.data}</span>
                </div>
            )}
        </div>
        
        <div className="redesSocialesFooter">
            <div>
                {footerData.redesSociales.leyenda}
            </div>
            <div>
                {footerData.redesSociales.redes.map((red, index)=>
                    <div key={`Red${index}`}>
                        <a href={red.link} className={link} target="_blank" rel="noreferrer noopener">
                            <img src={red.SRC} alt={red.tittle} />
                        </a>
                    </div>
                )}
            </div>
        </div>
    </footer>
  )
}

export default Footer