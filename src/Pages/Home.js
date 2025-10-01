import React from 'react';
import Navigation from '../Components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <div className="homeContent">
        <div className="content">
          <h1><span>ADHULE</span> Jean</h1>
          <h2>Développeur Full Stack</h2>
          <a href="#" target="_blank" className="download-btn">
            📄 Télécharger le PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
