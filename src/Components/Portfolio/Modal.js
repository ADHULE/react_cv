import React from 'react';
import ReactDOM from 'react-dom';

// **************************************************
// ❌ Retirer la déclaration globale 'const modalRoot'
// **************************************************

// Composant de portail générique pour vos modales
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // Crée un nouvel élément div pour cette modale
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // 💡 RECHERCHEZ L'ÉLÉMENT ICI pour garantir qu'il existe
    const modalRoot = document.getElementById('modal-root');
    
    // **Vérification de sécurité** : S'assurer que le conteneur existe
    if (modalRoot) {
        // Le composant est monté, on ajoute le div au conteneur 'modal-root'
        modalRoot.appendChild(this.el);
    } else {
        console.error("L'élément '#modal-root' est introuvable. Assurez-vous qu'il est défini dans index.html.");
    }
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');
    
    if (modalRoot) {
        // Le composant va être démonté, on nettoie en retirant le div
        modalRoot.removeChild(this.el);
    }
  }

  render() {
    // Note : Le contenu sera rendu même si le conteneur n'est pas trouvé,
    // mais il n'apparaîtra pas dans le DOM. La vérification du componentDidMount est cruciale.
    return ReactDOM.createPortal(
      <div className={`modal-overlay ${this.props.isVisible ? 'is-visible' : ''}`}>
        {this.props.children}
      </div>,
      this.el // L'élément DOM cible
    );
  }
}

export default Modal;