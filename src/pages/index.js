import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

//Layout
import Layout from "../components/Layout"

//CSS
import {
  imgContainer,
  link,
  m3dButton,
  header,
  header_m_green,
  lineaServicios,
  lineaServicios__titulo,
  card,
  card_m_doubleCard,
  card_m_black,
  card_m_green,
  card_m_rounded,
  card_m_roundedInverted,
  card__tittle,
  card__tittle_m_creative,
  card__textContent,
  vistaServicios,
  contenedorFlex_m_columna
} from "../components/cssComponent/globalCSS.module.css"

//Data
import {
  headerData,
  lineasServicios,
  pildoras3d,
  clientes,
  proyectos
} from "../data/forPages/home"


const IndexPage = () => {

  const creative = lineasServicios.creative;
  const industrial = lineasServicios.industrial;

  return (
    <Layout>
      <header className={`${header} + ${header_m_green}`}>
        <div className={imgContainer}>  
          <StaticImage 
            src="../images/homeImages/bannerHome.jpg"
            alt="Impresión 3d"
            height={200}
          />
        </div>
        <h1>{headerData.tittle}</h1>
        <p>{headerData.intro}</p>
      </header>
      <section className={lineaServicios}>
        <div>
          <h2 className={lineaServicios__titulo}>{lineasServicios.tittle}</h2>
          <p>{lineasServicios.intro}</p>
          <div id="lineaCreative">
            
            <div className={`${card} + ${card_m_black} + ${card_m_rounded}`}>

              <h2 className={card__tittle_m_creative}>{creative.tittle}</h2>
              <div className={card__textContent}>
                {creative.parrafos.map((parrafo, index)=>
                  <p key={`pc${index}`}>{parrafo}</p>
                )}
              </div>

            </div>

            <div className="servicesImages">
              {creative.imagenes.map((imagen, index)=>
                <img key={`imc${index}`} src={imagen.SRC} alt={imagen.alt}/>
              )}
            </div>

            <div className={vistaServicios}>
              <h3>Servicios</h3>
              {creative.servicios.map((servicio, index)=>
                <Link to={servicio.link} key={`cs${index}`} className={link}>
                  <div>
                    <img src={servicio.iconSRC} alt={`Servicio de ${servicio.tittle}`} />
                    <span>{servicio.tittle}</span>
                  </div>
                </Link>
              )}
            </div>

            <Link to={creative.button.link}>
              <button className={m3dButton}>
                {creative.button.text}
              </button>
            </Link>
          </div>

          <div id="lineaIndustrial" className="lineaIndustrial">
            
            <div className={`${card} + ${card_m_black} + ${card_m_roundedInverted}`}>
              <h2 className={card__tittle}>{industrial.tittle}</h2>
              <div className={card__textContent}>
                {industrial.parrafos.map((parrafo, index)=>
                  <p key={`pi${index}`}>{parrafo}</p>
                )}
              </div>
            </div>
            <div className="servicesImages">
              {industrial.imagenes.map((imagen, index)=>
                <img key={`imi${index}`} src={imagen.SRC} alt={imagen.alt}/>
              )}
            </div>

            <div className={vistaServicios}>
              <h3>Servicios</h3>
              {industrial.servicios.map((servicio, index)=>
                <Link to={servicio.link} key={`is${index}`} className={link}>
                  <div>
                    <img src={servicio.iconSRC} alt={`Servicio de ${servicio.tittle}`} />
                    <span>{servicio.tittle}</span>
                  </div>
                </Link>
              )}
            </div>

            <Link to={industrial.button.link}>
              <button className={m3dButton}>
                {industrial.button.text}
              </button>
            </Link>

          </div>
        </div>
      </section>

      <section className="pildoras3dPresentación">
        <div className={`${card} + ${card_m_green} + ${card_m_rounded}`}>
          <div className={`${card_m_doubleCard} + ${card_m_black} + ${card_m_roundedInverted}`}>
            <h2 className={card__tittle}>{pildoras3d.tittle}</h2>
            <div>
              <div>
                <img src={pildoras3d.imagen.SRC} alt={pildoras3d.imagen.alt} />
              </div>
              <div>
                <div className={card__textContent}>
                  {pildoras3d.parrafos.map((parrafo, index)=>
                    <p key={`pp${index}`}>{parrafo}</p>
                  )}
                </div>
                <div>
                  <Link to={pildoras3d.button.link}>
                    <button className={m3dButton}>
                      {pildoras3d.button.text}
                    </button>
                  </Link>
                  <a href={pildoras3d.socialmedia.link}>
                    <img src={pildoras3d.socialmedia.SRC} alt={pildoras3d.socialmedia.alt} />
                  </a>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      <section className="nuestrosClientes" hidden>
        <h2>{clientes.tittle}</h2>
        <div className={contenedorFlex_m_columna}>
          {clientes.logoClientes.map((cli, index)=>
            <a href={cli.link} key={`cli${index}`}>
              <img src={cli.SRC} alt={cli.name} />
            </a>
          )}
        </div>
      </section>

      <section className="projectosResumen" hidden>
        <h2>{proyectos.tittle}</h2>
        <div>
          <div>
            {proyectos.parrafos.map((parrafo, index)=>
              <p key={`ppr${index}`}>{parrafo}</p>
            )}
          </div>
          <div>
            <img src={proyectos.imagen.SRC} alt={proyectos.imagen.alt} />
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

export default IndexPage

export const Head = () => <title>Home Page</title>
