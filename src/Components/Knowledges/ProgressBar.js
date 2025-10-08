import React from "react";
// la fonction qui restourne un barre de progression qui est utliser dans l'affiche des langages et FrameWroks
const ProgressBar = ({ items, title }) => {
  // une fonction pour retourner la longueur d'une barre de progression
  const getWidth = (level) => {
    switch (level) {
      case "Avancé":
        return "75%";
      case "Intermédiaire":
        return "50%";
      case "Débutant":
        return "25%";
      default:
        return "0%";
    }
  };
  // une fonction pour restourner les vouleurs selon le pourcentage
  const getColor = (level) => {
    switch (level) {
      case "Avancé":
        return "#4caf50";
      case "Intermédiaire":
        return "#2196f3";
      case "Débutant":
        return "#ff9800";
      default:
        return "#ccc";
    }
  };
  // le corps jsx pour afficher les informations
  return (
    <div className="progressBar">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="progressItem">
            <div className="labelRow">
              <span className="label">{item.value}</span>
              <span className="level">{item.level}</span>
            </div>
            <div className="bar">
              <div
                className="fill"
                style={{
                  width: getWidth(item.level),
                  backgroundColor: getColor(item.level),
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
