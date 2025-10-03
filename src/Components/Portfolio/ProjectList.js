import React, { Component } from "react";
import { PortfolioData } from "../../Data/PortfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: PortfolioData, 
  };

  render() {
    const { projects } = this.state; 

    return (
      <div className="portfolioContent">
        {/* Ici tu pourras ajouter les filtres radio plus tard */}
        <ul className="radioDisplay"></ul>

        <div className="projects">
          {projects.map((item) => (
            <Project key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectList;
