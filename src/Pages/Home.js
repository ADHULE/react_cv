import React from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
   <div className="home">
  <div className="wave"></div>
  <div className="wave wave2"></div>

  <Navigation />

  <div className="homeContent">
    <div className="hero">
      <header className="hero-header">
        <h1>
          <span className="name-bold">ADHULE</span> Jean
        </h1>
        <h2>Développeur Full Stack | Architecte de Solutions</h2>
        <p className="hook">
          Je construis l'avenir numérique, du concept au déploiement final.
        </p>
      </header>

      <div className="hero-main">
        <div className="left-panel">
          <h3>Expertise Technique</h3>
          <p>Passionné par la conception et le déploiement d'applications web robustes...</p>
        </div>

        <div className="right-panel">
          <h3>
            SLOGAN : <span>Amour, Confiance et Travail</span>
          </h3>
          <p className="impact-statement">Coder votre succès est notre métier...</p>
        </div>
      </div>

      <footer className="hero-footer">
        <p className="cta-text">
          Prêt à optimiser votre stack technique ? Téléchargez mon CV.
        </p>
        <a href="#" target="_blank" className="download-button">
          📄 Télécharger le PDF
        </a>
      </footer>
    </div>
  </div>
</div>

  );
};

export default Home;
