import React from "react";
import Carousel from "../../components/Carousel/Carousel"; //importation du composant Carousel qui affiche le carrousel de la page d'une location
import Info from "../../components/Info/Info";
import Accordion from "../../components/Accordion/Accordion";
import Data from "../../data.json";
import { useParams } from "react-router-dom"; //importation de useParams qui permet de récupérer les paramètres de l'URL
import "./LocationPage.css";
export default function LocationPage() {
  //exportation de la fonction LocationPage qui est un composant qui affiche la page d'une location
  const { id } = useParams(); //récupération de l'id de la location dans l'URL use param permet de récupérer les paramètres de l'URL

  const infoLocation = Data.find((location) => location.id === id); //recherche de l'id de la location dans le tableau Data et récupération des informations de la location

  if (infoLocation !== undefined) {
    //si l'id de la location est trouvé dans le tableau Data alors on affiche la page de la location sinon on affiche la page d'erreur 404
    const {
      title,
      location,
      tags,
      host,
      rating,
      pictures,
      description,
      equipments,
    } = infoLocation; //décomposition des informations de la location dans des constantes pour pouvoir les utiliser dans le composant LocationPage
    return (
      //affichage des informations de la location dans le composant <Info
      <div>
        <Carousel pictures={pictures} />
        <Info
          title={title}
          location={location}
          tags={tags}
          host={host}
          rating={rating}
        />
        <div className="location__collapse">
          <Accordion title={"Description"} description={description} />
          <Accordion
            title={"Equipements"}
            description={equipments.map((equipment) => {
              //pour chaque équipement de la location on affiche une ligne de la liste
              return <li key={`${equipment}`}>{equipment}</li>; //affichage de la liste des équipements de la location pour chaque équipement on affiche une ligne de la liste avec la clé de l'équipement et le nom de l'équipement
            })}
          />
        </div>
      </div>
    );
  } else {
    //si l'id de la location n'est pas trouvé dans le tableau Data alors on affiche la page d'erreur 404
    window.location.href = "/404";
  }
}
