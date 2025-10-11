import React, { Component } from "react";

class Project extends Component {
  state = {
    showInformation: false,
  };

  handleInformation = () => {
    this.setState((prevState) => ({
      showInformation: !prevState.showInformation,
    }));
  };

  render() {
    const { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        {/* Icônes des langages */}
        <div className="languagesIcons">
          {languagesIcons.map((iconClass) => (
            <i className={iconClass} key={iconClass}></i>
          ))}
        </div>

        {/* Nom du projet */}
        <h3>{name}</h3>

        {/* Image cliquable */}
        <img
          src={picture}
          onClick={this.handleInformation}
          alt={name}
          title={name}
          style={{ width: "100%", maxWidth: "400px", cursor: "pointer" }}
        />

        {/* Bouton pour afficher les infos */}
        <span className="infos">
          <i
            className="fas fa-plus-circle"
            onClick={this.handleInformation}
            style={{ cursor: "pointer" }}
          ></i>
        </span>

        {/* Informations supplémentaires */}
        {this.state.showInformation && (
          <div className="showInformation">
            <div className="informationContent">
              <div className="head">
                <h3>{name}</h3>
                <div className="sourceCode">
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Code source
                  </a>
                </div>
              </div>

              <p className="text">{info}</p>

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
