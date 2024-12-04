import React from "react";
import { pageData } from "@/lib/data";
import Faq1 from "./faq1";
import Faq2 from "./faq2";

const FaqSelector = ({ data }) => {
  const FaqComponents = {
    1: Faq1,
    2: Faq2,
  };

  const SelectedFaq = FaqComponents[data.templateNumber] || Faq1;

  return <SelectedFaq data={data} />;
};

export default FaqSelector;
