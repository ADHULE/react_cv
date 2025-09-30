import React from "react";
// Importation des composants nécessaires de React Router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importation de toutes les pages de l'application
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Knowledges from "./Pages/Knowledges";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    // BrowserRouter englobe toute l'application et permet d'utiliser le routage
    <BrowserRouter>
      {/* Routes contient toutes les définitions de navigation */}
      <Routes>
        {/* Chaque Route correspond à un chemin (URL) et affiche un composant */}
        <Route path="/" exact element={<Home />} />             
        <Route path="/contact" element={<Contact />} />  
        <Route path="/knowledges" element={<Knowledges />} /> 
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Route spéciale : "*" capture toutes les URL non définies */}
        <Route path="*" element={<NotFound />} />         {/* Page 404 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
