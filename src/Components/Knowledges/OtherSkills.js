import React from "react";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h2>Autres Compétences</h2>
      <div className="skillsList">
        <div className="left">
          <ul>
            <li>
              <i className="fas fa-language"></i> Anglais courant
            </li>
            <li>
              <i className="fab fa-git-alt"></i> Git / GitHub
            </li>
            <li>
              <i className="fas fa-search"></i> SEO / Référencement web
            </li>
            <li>
              <i className="fas fa-tasks"></i> Méthodes agiles (Scrum, Kanban)
            </li>
            <li>
              <i className="fas fa-tools"></i> Résolution de problèmes
              informatiques
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <i className="fas fa-project-diagram"></i> Gestion de projet
            </li>
            <li>
              <i className="fas fa-users"></i> Travail en équipe / collaboration
            </li>
            <li>
              <i className="fas fa-shield-alt"></i> Sécurité informatique de
              base
            </li>
            <li>
              <i className="fas fa-file-alt"></i> Rédaction technique /
              documentation
            </li>
            <li>
              <i className="fas fa-lightbulb"></i> Veille technologique
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
