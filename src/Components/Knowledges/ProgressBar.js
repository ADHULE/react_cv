import React from "react";

const ProgressBar = ({ className, title, languages }) => {
  // Durée max d'expérience
  const xpYears = 2;

  return (
    <div className={className}>
      <h3>{title}</h3>

      {/* Légende des années */}
      <div className="years">
        <span>Années d'expérience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      {/* Liste des compétences */}
      <ul className="languagesList">
        {languages.map((item) => {
          // valeur par défaut si xp non défini
          const xp = item.xp || 1; 
          const progressBar = (xp / xpYears) * 100 + "%";

          return (
            <li key={item.id} className="languageItem">
              <span className="languageName">{item.value}</span>
              <div className="progressContainer">
                <div
                  className="progressBar"
                  style={{ width: progressBar }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProgressBar;
