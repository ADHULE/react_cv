import React, { Component } from "react";
import { PortfolioData } from "../../Data/PortfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: PortfolioData,
    radio: [
      { id: 1, value: "JavaScript" },
      { id: 2, value: "Python" },
      { id: 3, value: "PHP" },
      { id: 4, value: "CSS" },
    ],
    selectedRadio: "JavaScript",
  };

  render() {
    const handleRadio = (event) => {
      let radio=event.target.value;
      this.setState({selectedRadio:radio})
    };

    const { projects, radio, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        {/* Ici tu pourras ajouter les filtres radio plus tard */}
        <ul className="radioDisplay">
          {/*afficher les langages en tete avec des boutons radios afin de naviguer ou sélectionner un des ces langages  */}

          {radio.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                ></input>
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

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
