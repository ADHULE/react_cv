import React, { Component } from "react";
import { PortfolioData } from "../../Data/PortfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: PortfolioData,
    radios: [
      { id: 1, value: "JavaScript" },
      { id: 2, value: "Python" },
      { id: 3, value: "PHP" },
      { id: 4, value: "CSS" },
    ],
    selectedRadio: "JavaScript",
  };

  handleRadioChange = (event) => {
    this.setState({ selectedRadio: event.target.value });
  };

  render() {
    const { projects, radios, selectedRadio } = this.state;

    //  Filtrer les projets selon la catégorie sélectionnée
    const filteredProjects = projects.filter((project) =>
      project.languages.includes(selectedRadio)
    );

    return (
      <div className="portfolioContent">
        {/*  Filtres Radio */}
        <ul className="radioDisplay">
          {radios.map((radio) => (
            <li key={radio.id} className="radioItem">
              <input
                type="radio"
                name="languageRadio"
                value={radio.value}
                id={radio.value}
                checked={radio.value === selectedRadio}
                onChange={this.handleRadioChange}
                className="radioButton"
              />
              <label htmlFor={radio.value}>{radio.value}</label>
            </li>
          ))}
        </ul>
        <h2>Mes Projets</h2>

        {/*  Liste des projets */}
        <div className="projects">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item) => (
              <Project key={item.id} item={item} />
            ))
          ) : (
            <p className="noProject">
              Aucun projet trouvé pour cette catégorie.
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectList;
