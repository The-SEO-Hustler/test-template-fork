import React from "react";
import Hero1 from "./hero1";
import Hero2 from "./hero2";
import Hero3 from "./hero3";
import Hero4 from "./hero4";
import Hero5 from "./hero5";
import Hero6 from "./hero6";
import Hero7 from "./hero7";
import Hero8 from "./hero8";

const HeroSelector = ({ data }) => {
  const heroComponents = {
    1: Hero1,
    2: Hero2,
    3: Hero3,
    4: Hero4,
    5: Hero5,
    6: Hero6,
    7: Hero7,
    8: Hero8,
  };

  const SelectedHero = heroComponents[data.templateNumber] || Hero1;

  return <SelectedHero data={data} />;
};

export default HeroSelector;
