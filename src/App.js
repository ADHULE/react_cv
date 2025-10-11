import React, { useEffect, useState } from "react";
// Importation des composants nécessaires de React Router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importation de toutes les pages de l'application
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Knowledges from "./Pages/Knowledges";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";

import LocalStorageManager from "./Components/LocalStorageManager/LocalStorgeManager";

const App = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Sauvegarde automatique d’un utilisateur
    LocalStorageManager.setItem("username", "Systeme Adhule");

    // Lecture de la valeur
    const storedUser = LocalStorageManager.getItem("username");
    if (storedUser) setUsername(storedUser);
  }, []);

  const handleClear = () => {
    LocalStorageManager.clear();
    setUsername("");
  };

  return (
    <>
  

      {/* <LocalStorgeManager/> */}

      {/* <div className="app">
        <h1>Bienvenue {username || "Invité"}</h1>
        <button onClick={handleClear}>Effacer les données locales</button>
      </div> */}

      <BrowserRouter basename="/react_cv">
        {" "}
        {/* ajout de basename ="/react_cv" est le nom de depot github permet de reconnaitre la racine lors d'hebergement de site sur gibhut*/}
        {/* Routes contient toutes les définitions de navigation */}
        <Routes>
          {/* Chaque Route correspond à un chemin (URL) et affiche un composant */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledges" element={<Knowledges />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Route spéciale : "*" capture toutes les URL non définies */}
          <Route path="*" element={<NotFound />} /> {/* Page 404 */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
