import React from 'react'
import logoFooter from '../../assets/images/logofooter.svg'
import './Footer.css'
import copyright from '../../assets/images/copyright.svg'

export default function Footer() { //exportation de la fonction Footer qui retourne un composant Footer qui est un composant qui affiche le footer de la page
  return ( //affichage du footer de la page
    <footer className="footerWrapper">
        <figure className="footerWrapper__fig">
            <img src={logoFooter} alt="logo de l'agence de location" className="footerWrapper__fig__img" />
        </figure>
        <div className="footerWrapper__text">
            <img className="footerWrapper__copyright" src={copyright} alt="copyright"  />
            <p className='footerWrapper__text__p'>2022 Kasa. All rights reserved</p>
        </div>

    </footer>
      
  )
}
