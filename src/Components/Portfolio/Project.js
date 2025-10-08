import React, { Component } from "react";

class Project extends Component {
  // État local pour afficher ou cacher les informations
  state = {
    showInformation: false,
  };

  // Fonction qui inverse l'état d'affichage des informations
  handleInformation = () => {
    this.setState((prevState) => ({
      showInformation: !prevState.showInformation,
    }));
  };

  render() {
    // Déstructuration des props reçues
    const { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        {/* Section des icônes de langages */}
        <div className="languagesIcons">
          {languagesIcons.map((iconClass) => (
            <i className={iconClass} key={iconClass}></i>
          ))}
        </div>

        {/* Nom du projet */}
        <h3>{name}</h3>

        {/* Image du projet */}
        <img src={picture} style={{ width: 400 }} alt={name} />

        {/* Bouton pour afficher les informations */}
        <span className="infos">
          <i
            className="fas fa-plus-circle"
            onClick={this.handleInformation}
            style={{ cursor: "pointer" }}
          ></i>
        </span>

        {/* Affichage conditionnel des informations supplémentaires */}
        {this.state.showInformation && (
          <div className="showInformation">
            <div className="informationContent">
              <div className="head">
                <h3>{name}</h3>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>

              {/* Description du projet */}
              <p className="text">{info}</p>

              {/* Bouton pour revenir à la vue principale */}
              <div
                className="button return"
                onClick={this.handleInformation}
                style={{ cursor: "pointer" }}
              >
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;

