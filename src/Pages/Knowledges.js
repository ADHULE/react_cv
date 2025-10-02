import React from "react";
import Experiences from "../Components/Knowledges/Experiences";
import Hobbies from "../Components/Knowledges/Hobbies";
import OtherSkills from "../Components/Knowledges/OtherSkills";
import Languages from "../Components/Knowledges/Languages";
import Navigation from "../Components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
       <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experiences />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
 