import React from "react";
import Navigation from "../Components/Navigation";
import ProjectList from "../Components/Portfolio/ProjectList";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      
        <div className="content">
          <h1>Portfolio</h1>

        <ProjectList/>

        </div>
      </div>
   
  );
};

export default Portfolio;
