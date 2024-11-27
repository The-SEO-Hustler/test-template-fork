import React from "react";
import { pageData } from "@/lib/data";
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import Feature3 from "./feature3";
import Feature4 from "./feature4";

const FeatureSelector = () => {
  const FeatureComponents = {
    1: Feature1,
    2: Feature2,
    3: Feature3,
    4: Feature4,
  };

  const SelectedFeature =
    FeatureComponents[pageData.features.templateNumber] || Feature1;

  return <SelectedFeature data={pageData.features} />;
};

export default FeatureSelector;
