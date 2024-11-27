import React from "react";
import { pageData } from "@/lib/data";
import Portifolio1 from "./portifolio1";
import Portifolio2 from "./portifolio2";
import Portifolio3 from "./portifolio3";
import Portifolio4 from "./portifolio4";

const PortifolioSelector = () => {
  const PortifolioComponents = {
    1: Portifolio1,
    2: Portifolio2,
    3: Portifolio3,
    4: Portifolio4,
  };

  const SelectedPortifolio =
    PortifolioComponents[pageData.portifolio.templateNumber] || Portifolio1;

  return <SelectedPortifolio data={pageData.portifolio} />;
};

export default PortifolioSelector;
