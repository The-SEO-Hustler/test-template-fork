import React from "react";
import { pageData } from "@/lib/data";
import Navbar1 from "./navbar1";
import Navbar2 from "./navbar2";
import Navbar3 from "./navbar3";
import Navbar4 from "./navbar4";
import Navbar5 from "./navbar5";
import Navbar6 from "./navbar6";
import Navbar7 from "./navbar7";

const NavbarSelector = () => {
  const NavbarComponents = {
    1: Navbar1,
    2: Navbar2,
    3: Navbar3,
    4: Navbar4,
    5: Navbar5,
    6: Navbar6,
    7: Navbar7,
  };

  const SelectedNavbar =
    NavbarComponents[pageData.navbar.templateNumber] || Navbar1;

  return <SelectedNavbar />;
};

export default NavbarSelector;
