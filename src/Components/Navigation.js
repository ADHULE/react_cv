import React from "react";
import { NavLink } from "react-router-dom"; //la fonction pour naviguer entres les différentes pages 

const Navigation = () => {
  return (
    <div className="sidebar">
      {/* Section profil */}
      <div className="id">
        <div className="idcontent">
        
      <img src={`${process.env.PUBLIC_URL}/Media/my.jpg`} alt="Photo" />


          <h3>ADHULE Jean</h3>
        </div>
      </div>

      {/* Éléments de navigation */}
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/knowledges"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/portfolio"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <i className="fas fa-briefcase"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contact"
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              <i className="fas fa-envelope"></i>
              <span>Contactez-moi</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Réseaux sociaux */}
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ton-profil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/243000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AdhuleJean"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://web.facebook.com/?_rdc=2&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Signature */}
      <div className="signature">
        <p>Système Adhule</p>
      </div>
    </div>
  );
};

export default Navigation;
