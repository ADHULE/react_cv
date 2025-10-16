import React, { Component } from "react";
// Importez le composant Modal
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

  // Ajout d'une fonction pour fermer la modale
  closeModal = () => {
    this.setState({ showInformation: false });
  };

  render() {
    // Mise à jour de la déstructuration pour utiliser 'details' au lieu de 'info'
    const { name, languagesIcons, source, details, picture } = this.props.item;

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
          alt={`Image du projet : ${name}`}
          title={`Cliquez pour les détails de : ${name}`}
          style={{ width: "100%", maxWidth: "400px", cursor: "pointer" }}
        />

        {/* Bouton pour afficher les infos */}
        <span className="infos" style={{fontSize:"1.8rem", backgroundColor:"#38bdf8"}}>
          <i
            className="fas fa-plus-circle"
            onClick={this.handleInformation}
            style={{ cursor: "pointer", fontSize:"14px", paddingLeft: "5px" }} // Ajout d'un léger padding
          > Infos</i>
        </span>

        {/* Rendu de la modale via Portal UNIQUEMENT si showInformation est true */}
        {this.state.showInformation && (
          <Modal isVisible={this.state.showInformation} onClose={this.closeModal}>
            
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
                    Code source <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>

              {/* MISE À JOUR : Affichage des détails (Description, Objectif, But) sous forme de liste */}
              <div className="modal-body-details">
                {details.map((detail, index) => (
                  <div key={index} className={`detail-section detail-${detail.type.toLowerCase().replace(/\s/g, '-')}`}>
                    <h4>{detail.type} :</h4>
                    <p>{detail.content}</p>
                  </div>
                ))}
              </div>
              {/* FIN DE LA MISE À JOUR */}

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