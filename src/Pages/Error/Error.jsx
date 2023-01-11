import React from "react";
import ErrorComponents from "../../components/ErrorComponents/ErrorComponents";

export default function Error() {
  //exportation de la fonction Error qui retourne un composant ErrorComponents qui est un composant qui affiche une page d'erreur 404 si l'utilisateur se trompe dans l'URL de la page

  return (
    <div>
      <ErrorComponents />
    </div>
  );
}
