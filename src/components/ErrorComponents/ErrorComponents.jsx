import React from "react";
import { Link } from "react-router-dom";
import "./ErrorComponents.css";

export default function ErrorComponents() {
  //exportation de la fonction ErrorComponents qui retourne un composant ErrorComponents qui est un composant qui affiche une page d'erreur 404 si l'utilisateur se trompe dans l'URL de la page
  return (
    //affichage de la page d'erreur 404
    <div className="errorWrapper">
      <h1 className="errorTitle">404</h1>
      <p className="errorMessage">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="errorLink">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}
