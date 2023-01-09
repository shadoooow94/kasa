import React, {useState, } from 'react' //importation de React et de useState qui permet de créer des variables d'état  qui permettent de stocker des données et de mettre à jour ces données 
//useState permet de créer des variables d'état qui permettent de stocker des données et de mettre à jour ces données
import './Carousel.css' //importation du fichier CSS du composant Carousel 


export default function Carousel({pictures}) { //exportation de la fonction Carousel qui retourne un composant Carousel qui est un composant qui affiche un carousel d'images et qui prend en paramètre un tableau pictures qui contient les images du carousel

  


  const [locPict, setlocPict] = useState(0) //création d'une variable d'état locPict qui permet de stocker l'index de l'image affichée dans le carousel et d'une fonction setlocPict qui permet de modifier la valeur de la variable d'état locPict 
  /**
 *on appel l'image suivantes
 */
const nextPicture = () =>{ //on appel l'image suivantes et on vérifie si l'index de l'image affichée est égal à la longueur du tableau pictures -1 si c'est le cas on affiche la première image du tableau sinon on affiche l'image suivante
  setlocPict(locPict === pictures.length -1 ? 0 : locPict +1)
}

/** 
 * on appelle l'image précédente
 */

const previousPicture = () =>{ //on appelle l'image précédente et on vérifie si l'index de l'image affichée est égal à 0 si c'est le cas on affiche la dernière image du tableau sinon on affiche l'image précédente
  setlocPict(locPict === 0 ? pictures.length -1 : locPict -1);
}

  return ( //on retourne le composant Carousel qui est un composant qui affiche un carousel d'images 
    <section id='carouselWrapper'>    
      {/*on créé les bouton de navigation*/} 
      {pictures.length > 1 && <i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>} 
      {pictures.length > 1 && <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>}
      
      {/*intégration des images du carousel */}
      {pictures.map ((img, index) =>{ //on parcours le tableau pictures et on affiche l'image correspondante à l'index de l'image affichée dans le carousel
        return (
          <div key ={index}> 
            {index === locPict && <img src={img} alt= "photos de la location" className='carousel__img'/>} 
            {index === locPict && (
              <span className='carousel__img__number'>
                {locPict +1 }/{pictures.length}  
              </span>
            )}
            
          </div>
        )
      })}
    
      
    </section>
  )
}
