import React from 'react'
import BannerImg from '../../assets/images/fondAbout.jpg'
import './About.css'


export default function AboutBanner() { //exportation de la fonction AboutBanner qui retourne un composant AboutBanner qui est un composant qui affiche la bannière de la page à propos
  return (
    <div className='About__Banner__Wrapper'>
        <figure className='AboutBanner__fig'>
        <img className='banner__Wrapper__fig__img' src={BannerImg} alt="banniere page d'accueil" /> 
        </figure>      
    </div>
  )
}
