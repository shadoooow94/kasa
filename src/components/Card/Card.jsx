import React from 'react'
import '../../style/Card.css'
//affichage d'une carte de la page d'accueil qui contient une image et un titre
export default function Card({ cover, title}) { //exportation de la fonction Card qui retourne un composant Card qui est un composant qui affiche une carte de la page d'accueil
  return (
    <div className='location__card'>
      <img src={cover} alt="location" />
      <h2>{title}</h2>      
    </div>
  )
}
