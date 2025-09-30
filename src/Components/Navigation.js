import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      {/* Section profil */}
      <div className="id">
        <div className="idcontent">
          {/* Image de profil */}
          <img src="./Media/my.jpg" alt="profil-pic" />
          <h3>ADHULE Jean</h3>
        </div>
      </div>

      {/* Éléments de navigation */}
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i className="fas fa-graduation-cap"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-briefcase"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-envelope"></i>
              <span>Contactez-moi</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
