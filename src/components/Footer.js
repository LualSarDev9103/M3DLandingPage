import React from 'react'


//Data
import footerData from "../data/forComponents/footerData"

const Footer = () => {
  return (
    <footer>
        <div className="logoFooter">
            <img 
                src={footerData.logo.logoImageSRC}
                alt={footerData.logo.logoImageAlt}
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
                        <a href={red.link}>
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