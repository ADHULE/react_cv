import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    Languages: [
      { id: 1, value: "Java", level: "Avancé" },
      { id: 2, value: "Python", level: "Intermédiaire" },
      { id: 3, value: "JavaScript", level: "Intermédiaire" },
      { id: 4, value: "PHP", level: "Intermédiaire" },
      { id: 5, value: "CSS", level: "Intermédiaire" },
      { id: 6, value: "Dart", level: "Débutant" },
    ],

    Frameworks: [
      // === Frameworks Web et Mobile ===
      { id: 1, value: "Symfony", level: "Intermédiaire", language: "PHP" },
      { id: 2, value: "React", level: "Débutant", language: "JavaScript" },
      { id: 3, value: "Flutter", level: "Débutant", language: "Dart" },
      { id: 4, value: "Bootstrap", level: "Intermédiaire", language: "CSS" },
      { id: 5, value: "jQuery", level: "Intermédiaire", language: "JavaScript" },

      // === Frameworks pour Python ===
      { id: 6, value: "Django", level: "Intermédiaire", language: "Python" },
      { id: 7, value: "Flask", level: "Intermédiaire", language: "Python" },
      { id: 8, value: "FastAPI", level: "Débutant", language: "Python" },

      // === Frameworks pour Java ===
      { id: 9, value: "Spring Boot", level: "Avancé", language: "Java" },
      { id: 10, value: "Hibernate", level: "Intermédiaire", language: "Java" },
      { id: 11, value: "JavaFX", level: "Débutant", language: "Java" },
    ],
  };

  render() {
    const { Languages, Frameworks } = this.state;

    // On transforme les frameworks pour inclure le langage dans l’affichage
    const frameworksWithLang = Frameworks.map((fw) => ({
      ...fw,
      displayName: `${fw.value} (${fw.language})`,
    }));

    return (
      <div className="languages">
        <h2>Langages & Frameworks</h2>

        <div className="languagesContent">
          <div className="content">
            <div className="languagesSection">
              <ProgressBar items={Languages} title="Langages" />
            </div>

            <div className="frameworksSection">
              
              <ProgressBar
                items={frameworksWithLang}
                title="Frameworks & Bibliothèques"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
