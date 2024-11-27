import React from "react";
import { pageData } from "@/lib/data";
import Cases1 from "./cases1";
import Cases2 from "./cases2";
import Cases3 from "./cases3";
import Cases4 from "./cases4";

const CasesSelector = () => {
  const CasesComponents = {
    1: Cases1,
    2: Cases2,
    3: Cases3,
    4: Cases4,
  };

  const SelectedCases =
    CasesComponents[pageData.cases.templateNumber] || Cases1;

  return <SelectedCases data={pageData.cases} />;
};

export default CasesSelector;
