import React from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="homeContent">
        <div className="content">
          
          {/* Section 1 : Titre et Rôle Principal */}
          <header>
            <h1>
              <span className="name-bold">ADHULE</span> Jean
            </h1>
            <h2>Développeur Full Stack | Architecte de Solutions</h2>
            <p className="hook">
              Je construis l'avenir numérique, du concept au déploiement final.
            </p>
          </header>

          <div className="childrenContent">
            
            {/* Bloc Gauche : Expertise et Valeur */}
            <div className="left">
              <h3>Expertise Technique</h3>
              <p>
                Passionné par la **conception et le déploiement** d'applications web robustes. Je transforme vos défis métiers complexes en **solutions logicielles performantes et évolutives**.
              </p>
            </div>
            
            {/* Bloc Droit : Slogan et Philosophie (Focus Motivation) */}
            <div className="right">
              <h3>
                SLOGAN : <span>Amour, Confiance et Travail</span>{" "}
              </h3>
              <p className="impact-statement">
                **Coder votre succès est notre métier.** La résolution de vos problèmes est notre objectif, et la réalisation de vos ambitions est notre priorité absolue.
              </p>
            </div>
          </div>

          {/* Section 3 : Appel à l'Action (CTA) */}
          <footer>
             <p className="cta-text">
                Prêt à optimiser votre **stack technique** ? Téléchargez mon CV pour explorer mes réalisations concrètes.
             </p>
             <a href="#" target="_blank" className="download-btn">
                📄 Télécharger le PDF
             </a>
          </footer>
          
        </div>
      </div>
    </div>
  );
};

export default Home;