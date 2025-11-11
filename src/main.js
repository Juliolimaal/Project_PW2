// src/main.js

import { MobileNavBar } from "./components/MobileNavBar.js";

const mobileNavbar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();
