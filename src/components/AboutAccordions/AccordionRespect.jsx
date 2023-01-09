
import React from 'react'
import './AboutAccordion.css'

export default function AccordionRespect() { //exportation de la fonction AccordionRespect qui retourne un composant AccordionRespect qui est un composant qui affiche les informations de la page à propos

    



  return (
   
    <div id="about__info">
      <details className="about__info__details">
          <summary className="about__info__title">
              Respect <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="about__info__text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
      </details>
    </div>
  )
}
