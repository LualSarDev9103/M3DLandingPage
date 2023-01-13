import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

//Components
import Layout from '../components/Layout'

//CSS
import {
    header,
    header_m_green,
    imgContainer,
    card,
    card_m_doubleCard,
    card_m_rounded,
    card_m_roundedInverted,
    card_m_green,
    card_m_black,
    card__tittle,
    card__tittle_m_inverted,
    card__textContent,
    m3dButton,
    contenedorFlex_m_columna,
    link
} from "../components/cssComponent/globalCSS.module.css"

//Data
import {
    headerData,
    historia,
    mision,
    vision,
    numerosConfiables,
    clientes,
    proyectos
} from "../data/forPages/nosotrosD.js"

const noosotros = () => {
  return (
    <Layout>
      <header className={`${header} + ${header_m_green}`}>
        <div className={imgContainer}>  
          <StaticImage 
            src="../images/nosotrosImages/bannerNosotros.jpg"
            alt="Impresión 3d"
            height={200}
          />
        </div>
        <h1>{headerData.tittle}</h1>
        <p>{headerData.intro}</p>
      </header>
      <section>
        <p>{historia.pretittle}</p>
        <h2>{historia.tittle}</h2>
        {historia.parrafos.map((parrafo, index)=>
          <p key={`hp${index}`}>{parrafo}</p>
        )}
      </section>
      <section id="Mision">
        <div className={`${card} + ${card_m_green} + ${card_m_rounded}`}>
          <div className={`${card_m_doubleCard} + ${card_m_black} + ${card_m_roundedInverted}`}>
            <h2 className={card__tittle}>{mision.tittle}</h2>
            <div className={card__textContent}>
              {mision.parrafos.map((parrafo, index)=>
              <p key={`mp${index}`}>{parrafo}</p>
              )}
            </div>
          </div>    
        </div>
      </section>
      <section id="Vision">
        <div className={`${card} + ${card_m_green} + ${card_m_roundedInverted}`}>
          <div className={`${card_m_doubleCard} + ${card_m_black} + ${card_m_rounded}`}>
          <h2 className={card__tittle_m_inverted}>{vision.tittle}</h2>
            <div className={card__textContent}>
              {vision.parrafos.map((parrafo, index)=>
              <p key={`vp${index}`}>{parrafo}</p>
              )}
            </div>
          </div>    
        </div>
      </section>
      <section id="estadisticas">
        <h2>{numerosConfiables.tittle}</h2>
        <div className='container'>
          {numerosConfiables.numbers.map((numero, index)=>
            <div key={`nc${index}`}>
              <span>{numero.number}</span>
              <span>{numero.tag}</span>
            </div>
          )}
        </div>
      </section>
      <section className="nuestrosClientes">
        <h2>{clientes.tittle}</h2>
        <div className={contenedorFlex_m_columna}>
          {clientes.logoClientes.map((cli, index)=>
            <a href={cli.link} key={`cli${index}`}>
              <img src={cli.SRC} alt={cli.name} />
            </a>
          )}
        </div>
      </section>

      <section id="proyectos">
        <h2>{proyectos.tittle}</h2>
        <div>
          <div>
            {proyectos.parrafos.map((parrafo, index)=>
              <p key={`ppr${index}`}>{parrafo}</p>
            )}
          </div>
        </div>
        <div>
          <Link to={proyectos.button.link} className={link}>
            <button className={m3dButton}>{proyectos.button.text}</button>
          </Link>
          <a href={proyectos.socialmedia.link}>
            <img src={proyectos.socialmedia.SRC} alt={proyectos.socialmedia.alt} />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default noosotros