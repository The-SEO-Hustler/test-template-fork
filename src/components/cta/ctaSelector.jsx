import React from "react";
import { pageData } from "@/lib/data";
import Cta1 from "./cta1";
import Cta2 from "./cta2";
import Cta3 from "./cta3";

const CtaSelector = () => {
  const CtaComponents = {
    1: Cta1,
    2: Cta2,
    3: Cta3,
  };

  const SelectedCta = CtaComponents[pageData.cta.templateNumber] || Cta1;

  return <SelectedCta data={pageData.cta} />;
};

export default CtaSelector;
