import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h2>Intérêts</h2>
      <ul>
        <div className="hobbyContent">
          {/* Sport & Nature */}
          <div className="sport">
            <li className="hobby">
              <i className="fas fa-running"></i> Course à pied
            </li>
            <li className="hobby">
              <i className="fas fa-hiking"></i> Randonnées
            </li>
            <li className="hobby">
              <i className="fas fa-seedling"></i> Permaculture
            </li>
          </div>
          {/* Développement & Tech */}
          <div className="developpment">
            <li className="hobby">
              <i className="fas fa-laptop-code"></i> Programmation
            </li>
            <li className="hobby">
              <i className="fas fa-robot"></i> Intelligence artificielle
            </li>
            <li className="hobby">
              <i className="fas fa-database"></i> Bases de données
            </li>
            <li className="hobby">
              <i className="fas fa-cloud"></i> Cloud computing
            </li>
            <li className="hobby">
              <i className="fas fa-shield-alt"></i> Sécurité informatique
            </li>
          </div>

          {/* Créativité & Culture */}
          <div className="culture">
            <li className="hobby">
              <i className="fas fa-camera"></i> Photographie
            </li>
            <li className="hobby">
              <i className="fas fa-book"></i> Lecture technique
            </li>
            <li className="hobby">
              <i className="fas fa-music"></i> Musique
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Hobbies;
