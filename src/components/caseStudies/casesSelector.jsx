import React from "react";
import { pageData } from "@/lib/data";
import Cases1 from "./cases1";
import Cases2 from "./cases2";
import Cases3 from "./cases3";
import Cases4 from "./cases4";
import Cases5 from "./cases5";

const CasesSelector = ({ data }) => {
  const CasesComponents = {
    1: Cases1,
    2: Cases2,
    3: Cases3,
    4: Cases4,
    5: Cases5,
  };

  const SelectedCases = CasesComponents[data.templateNumber] || Cases1;

  return <SelectedCases data={data} />;
};

export default CasesSelector;
