import React from "react";
import Cta1 from "./cta1";
import Cta2 from "./cta2";
import Cta3 from "./cta3";

const CtaSelector = ({data}) => {
  const CtaComponents = {
    1: Cta1,
    2: Cta2,
    3: Cta3,
  };

  const SelectedCta = CtaComponents[data.templateNumber] || Cta1;

  return <SelectedCta data={data} />;
};

export default CtaSelector;
