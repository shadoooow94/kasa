import React from 'react'
import BannerDesk from '../../assets/images/bannerDesk.jpg'
import Card from '../../components/Card/Card';
import Data from '../../data.json'
import { Link } from 'react-router-dom';
import './Home.css'
import BannerResponsive from '../../assets/images/bannerResp.jpg'



export default function Home() { //exportation de la fonction Home qui retourne un composant Home qui est un composant qui affiche la page d'accueil du site
  
  return ( //retourne le composant Home qui est un composant qui affiche la page d'accueil du site 
    <div>
     
      <main>
        <div id="title">
          <img src={BannerDesk} alt="banniere paysage" id="banner__desktop" /> 
          <img src={BannerResponsive} alt="banniere paysage" id="banner__responsive" />
          <div id="title__background"></div>
          <h1 id="title__banner">Chez vous, partout et ailleurs</h1>
        </div>

        <div id="location">
          {Data.map((card) => ( //map permet de parcourir le tableau Data et de créer une carte pour chaque élément du tableau 
          //Link permet de créer un lien vers la page Location et de lui passer en paramètre l'id de la carte
           
            <Link className='location__link' key={`${card.id}`} to={`/Location/${card.id}`}>  
              <Card key={`${card.id}`} cover = {card.cover} title = {card.title} />   
            </Link>
          ))} 
          </div> 
      </main>
     
    </div>
  )
}
