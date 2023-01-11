import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Accordion from "../../components/Accordion/Accordion";

export default function About() {
  //exportation de la fonction About qui retourne un composant About qui est un composant qui affiche la page à propos
  return (
    <div>
      <AboutBanner />
      <Accordion
        title={"Fiabilité"}
        description={
          " Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        }
      />
      <Accordion
        title={"Respect"}
        description={
          " La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        }
      />
      <Accordion
        title={"Service"}
        description={
          "  Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
      />
      <Accordion
        title={"Sécurité"}
        description={
          "  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
      />
    </div>
  );
}
