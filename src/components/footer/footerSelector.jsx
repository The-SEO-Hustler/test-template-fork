import React from "react";
import { pageData } from "@/lib/data";
import Footer1 from "./footer1";
import Footer2 from "./footer2";

const FooterSelector = () => {
  const FooterComponents = {
    1: Footer1,
    2: Footer2,
  };

  const SelectedFooter =
    FooterComponents[pageData.footer.templateNumber] || Footer1;

  return <SelectedFooter />;
};

export default FooterSelector;
