import React, { Component } from "react";

class Project extends Component {
  render() {
    const { nom, language, languagesIcons, source, info, picture } =
      this.props.item;

    return (
      <div className="project">
        {/* Image du projet */}
        <div className="projectImage">
          <img src={picture} alt={nom} />
        </div>

        {/* Contenu du projet */}
        <div className="projectContent">
          {/* Nom du projet */}
          <h3 className="projectTitle">{nom}</h3>

          {/* Liste des langages */}
          <div className="projectLanguages">
            {language.map((lang, index) => (
              <span key={index} className="language">
                <i className={languagesIcons[index]}></i> {lang}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="projectInfo">{info}</p>

          {/* Lien vers le code source */}
          <div className="projectLinks">
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="btnProject"
            >
              Voir le code <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
