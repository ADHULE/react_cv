import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    Languages: [
      { id: 1, value: "Python", level: "Intermédiaire" },
      { id: 2, value: "JavaScript", level: "Intermédiaire" },
      { id: 3, value: "PHP", level: "Intermédiaire" },
      { id: 4, value: "CSS", level: "Intermédiaire" },
      { id: 5, value: "Dart", level: "Débutant" },
    ],
    Frameworks: [
      { id: 1, value: "Symfony", level: "Intermédiaire" },
      { id: 2, value: "React", level: "Débutant" },
      { id: 3, value: "Flutter", level: "Débutant" },
      { id: 4, value: "Bootstrap", level: "Intermédiaire" },
      { id: 5, value: "jQuery", level: "Intermédiaire" },
    ],
  };

  render() {
    const { Languages, Frameworks } = this.state;
    return (
      <div className="languages">
        <h2>Langages & Frameworks</h2>
        <div className="languagesContent">
          <div className="content">
            <div className="languagesSection">
              <ProgressBar
                items={Languages}
                title="Langages"
              />
            </div>
            <div className="frameworksSection">
              <ProgressBar
                items={Frameworks}
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
