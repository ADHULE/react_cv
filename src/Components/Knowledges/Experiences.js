import React from "react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      titre: "Développement d’une application desktop",
      lieu: "Université Officielle de Ruwenzori",
      annee: "2024 - 2025",
      description:
        "Conception et développement d’une application de gestion académique. Utilisation de Python (PySide6) et MySql pour la base de données.",
    },
    {
      id: 2,
      titre: "Projet de reconnaissance faciale et détection d’alcool",
      lieu: "Projet de fin d’étude - UOR",
      annee: "2024 - 2025",
      description:
        "Intégration d’un système de reconnaissance faciale (InsightFace) et de détection d’alcool (Arduino MQ3) pour contrôler l’accès sécurisé.",
    },
    {
      id: 3,
      titre: "Développement web full-stack",
      lieu: "Projet personnel",
      annee: "2023 - 2024",
      description:
        "Création d’un site web personnel et d’applications web dynamiques avec : Symfony, React, Python, Flutter. Comme base de données:  MySql et MongoDB. Gestion du front et du back-end.",
    }, {
      id: 1,
      titre: "Développement d’une application desktop",
      lieu: "Université Officielle de Ruwenzori",
      annee: "2024 - 2025",
      description:
        "Conception et développement d’une application de gestion académique. Utilisation de Python (PySide6) et MySql pour la base de données.",
    },
    {
      id: 2,
      titre: "Projet de reconnaissance faciale et détection d’alcool",
      lieu: "Projet de fin d’étude - UOR",
      annee: "2024 - 2025",
      description:
        "Intégration d’un système de reconnaissance faciale (InsightFace) et de détection d’alcool (Arduino MQ3) pour contrôler l’accès sécurisé.",
    },
    {
      id: 3,
      titre: "Développement web full-stack",
      lieu: "Projet personnel",
      annee: "2023 - 2024",
      description:
        "Création d’un site web personnel et d’applications web dynamiques avec : Symfony, React, Python, Flutter. Comme base de données:  MySql et MongoDB. Gestion du front et du back-end.",
    },
  ];

  return (
    <div className="experience">
      <h2>Expériences</h2>
      <div className="experienceContent">
        {experiences.map((exp) => (
          <div className="experienceCard" key={exp.id}>
            <div className="experienceHeader">
              <h3>{exp.titre}</h3>
              <span className="annee">{exp.annee}</span>
            </div>
            <h4 className="lieu">{exp.lieu}</h4>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
