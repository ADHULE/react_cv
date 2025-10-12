import React, { Component } from "react";
// Importez le nouveau composant Modal
import Modal from "./Modal"; 

class Project extends Component {
  state = {
    showInformation: false,
  };

  // Toggle pour afficher/cacher la modale
  handleInformation = () => {
    this.setState((prevState) => ({
      showInformation: !prevState.showInformation,
    }));
  };

  // Ajout d'une fonction pour fermer la modale, utile si on veut fermer via Esc ou un click extérieur
  closeModal = () => {
    this.setState({ showInformation: false });
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
        <span className="infos" style={{fontSize:"1.8rem", backgroundColor:"#38bdf8"}}>
          <i
            className="fas fa-plus-circle"
            onClick={this.handleInformation}
            style={{ cursor: "pointer"}}
          ></i>
        </span>

        {/* Rendu de la modale via Portal UNIQUEMENT si showInformation est true */}
        {this.state.showInformation && (
          <Modal isVisible={this.state.showInformation}>
            
            <div className="modal-content">
              <div className="modal-head"> 
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

              <p className="modal-body">{info}</p> 

              <button 
                className="button return"
                onClick={this.handleInformation}
              >
                Retourner sur la page
              </button>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Project;