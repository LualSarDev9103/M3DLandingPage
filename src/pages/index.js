import { Link } from "gatsby"
import * as React from "react"

//Data
import {
  headerData,
  lineasServicios,
  pildoras3d,
  clientes,
  proyectos
} from "../data/forPages/home"

//Layout
import Layout from "../components/Layout"

const IndexPage = () => {

  const creative = lineasServicios.creative;
  const industrial = lineasServicios.industrial;

  return (
    <Layout
      headerData = {headerData}
    >
      <section className="lineasServicios">
        <div>
          <h2>{lineasServicios.tittle}</h2>
          <p>{lineasServicios.intro}</p>
          <div id="lineaCreative" className="lineaCreative">

            <h2>{creative.tittle}</h2>
            {creative.parrafos.map((parrafo, index)=>
              <p key={`pc${index}`}>{parrafo}</p>
            )}

            <div className="servicesImages">
              {creative.imagenes.map((imagen, index)=>
                <img key={`imc${index}`} src={imagen.SRC} alt={imagen.alt}/>
              )}
            </div>

            <div className="servicesIcons">

              {creative.servicios.map((servicio, index)=>
                <Link to={servicio.link} key={`cs${index}`}>
                  <div>
                    <img src={servicio.iconSRC} alt={`Servicio de ${servicio.tittle}`} />
                    <span>{servicio.tittle}</span>
                  </div>
                </Link>
              )}
            </div>
          </div>

          <div id="lineaIndustrial" className="lineaIndustrial">
            
            <h2>{industrial.tittle}</h2>
            {industrial.parrafos.map((parrafo, index)=>
              <p key={`pi${index}`}>{parrafo}</p>
            )}

            <div className="servicesImages">
              {industrial.imagenes.map((imagen, index)=>
                <img key={`imi${index}`} src={imagen.SRC} alt={imagen.alt}/>
              )}
            </div>

            <div className="servicesIcons">

              {industrial.servicios.map((servicio, index)=>
                <Link to={servicio.link} key={`is${index}`}>
                  <div>
                    <img src={servicio.iconSRC} alt={`Servicio de ${servicio.tittle}`} />
                    <span>{servicio.tittle}</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pildoras3dPresentación">
        <div>
          <h2>{pildoras3d.tittle}</h2>
          <div>
            <div>
              <img src={pildoras3d.imagen.SRC} alt={pildoras3d.imagen.alt} />
            </div>
            <div>
              <span>
                {pildoras3d.parrafos.map((parrafo, index)=>
                  <p key={`pp${index}`}>{parrafo}</p>
                )}
              </span>
              <div>
                <Link to={pildoras3d.button.link}>
                  <button>
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
      </section>

      <section className="nuestrosClientes">
        <h2>{clientes.tittle}</h2>
        <div>
          {clientes.logoClientes.map((cli, index)=>
            <a href={cli.link} key={`cli${index}`}>
              <img src={cli.SRC} alt={cli.name} />
            </a>
          )}
        </div>
      </section>

      <section className="projectosResumen">
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
          <Link to={proyectos.button.link}>
            <button>{proyectos.button.text}</button>
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
