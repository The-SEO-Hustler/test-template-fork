import React from "react";
import Feature1 from "./services1";
import Feature2 from "./services2";
import Feature3 from "./services3";
import Feature4 from "./services4";

const ServicesSelector = ({data}) => {
  const FeatureComponents = {
    1: Feature1,
    2: Feature2,
    3: Feature3,
    4: Feature4,
  };

  const SelectedFeature =
    FeatureComponents[data.templateNumber] || Feature1;

  return <SelectedFeature data={data} />;
};

export default ServicesSelector;
