import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    Languages: [
      { id: 1, value: "Python", level: "Avancé" },
      { id: 2, value: "JavaScript", level: "Intermédiaire" },
      { id: 3, value: "PHP", level: "Intermédiaire" },
      { id: 4, value: "CSS", level: "Avancé" },
      { id: 5, value: "Dart", level: "Débutant" },
      { id: 6, value: "HTML", level: "Avancé" },
    ],
    Frameworks: [
      { id: 1, value: "Symfony", level: "Intermédiaire" },
      { id: 2, value: "React", level: "Avancé" },
      { id: 3, value: "Flutter", level: "Débutant" },
      { id: 4, value: "Bootstrap", level: "Avancé" },
      { id: 5, value: "jQuery", level: "Intermédiaire" },
    ],
  };

  render() {
    let { Languages, Frameworks } = this.state;
    return (
      <div className="languages">
        <h2>Langages & Frameworks</h2>

        <div className="languagesContent">
          {/* Section Langages */}
          <div className="languagesSection">
            <h3>Langages</h3>
            <ProgressBar
              languages={Languages}
              className="languagesDisplay"
              title="Langages"
            />
          </div>

          {/* Section Frameworks */}
          <div className="frameworksSection">
            <h3>Frameworks & Bibliothèques</h3>
            <ProgressBar
              languages={Frameworks}
              className="frameworksDisplay"
              title="Frameworks & Bibliothèques"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
