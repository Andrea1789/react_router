import React from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'

const divStyle = {
  background: '#6a4c93',
  width: '100vw',
  height: '90vh',
}

const preguntas = [
  {
    id:1,
    title: "¿Puedo hacer el curso sin tener experiencia y/o conocimientos previos?",
    
    descripcion: "Sí. En Digital House puedes aprender desde cero.Según el curso al que te anotaste, vamos a enviarte contenido previo online..."
    },
    {
    id:2,
    title: "¿Las vacantes son limitadas?",
    descripcion: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso."
    },
  ]

const Faqs = () => {
  return (
    <div style={divStyle}>
      <h1 style={{textAlign: 'center'}}>Faqs</h1>
        <ol style={{listStyleType: 'none'}}>
        {preguntas.map(pregunta => (
          <Link key={pregunta.id} to={`${pregunta.id}`}>
            <li style={{marginTop: 20}}>
              {pregunta.title}
              </li>
          </Link>
      ))}
      </ol>
      </div>
  )
}

export const Faq = () => {
  const params = useParams()
  //Utilizamos parseInt solamente para pasar el id al tipo number
  const pregunta = preguntas.find(pregunta => pregunta.id === parseInt
  (params.id))
  return (
      <div>
          <h1>FAQ: desde una pregunta específica {params.id}</h1>
          <section>
              <h3>{pregunta?.title}</h3>
              <p>{pregunta?.descripcion}</p>
          </section>
          <img alt="faq"/>
      </div>
  )
}

export default Faqs;