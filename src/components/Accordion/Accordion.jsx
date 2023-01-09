import React from 'react'
import './Accordion.css'

export default function Accordion({title, description}) { //exportation de la fonction Accordion qui retourne un composant Accordion qui est un composant qui affiche les informations de la location
    
  return (
    <div className='location__wrapper'>
      <div id="location__info">
        <details className="location__info__details">
            <summary className="location__info__title">
               {title}  <i className="fa-solid fa-chevron-down"></i>
            </summary>
            <p className="location__info__text">{description}</p>
        </details>
      </div>

      
    </div>
  )
}
