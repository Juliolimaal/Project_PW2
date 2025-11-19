<<<<<<< HEAD
import '/src/style.css';
import { MobileNavBar } from "./js/components/MobileNavBar.js"
import './js/cart.js';
const mobileNavbar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();

 
const investmentsGrid = document.querySelector('.investments');
 
investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');

console.log(investments);
=======
import { NotFound } from "./components/not_found";
import { Home } from "./pages/home"
import { WineRed } from "./pages/wine_red";
import { WineRose } from "./pages/wine_rose";
import { WineWhite } from "./pages/wine_white";


function router() {
  const hash = window.location.pathname.toLowerCase();
  const app = document.getElementById("app");

  let page;

  switch(hash) {
    case "/":
      page = Home()
      break;
    case "/portfolio/wine_red":
      page = WineRed()
      break
    case "/portfolio/wine_rose":
      page = WineRose()
      break
    case "/portfolio/wine_white":
      page = WineWhite()
      break
    default:
      page = NotFound()
  }

  app.innerHTML = '';
  app.appendChild(page);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
>>>>>>> 8800a2d410678f7534a118ef4a5a1fe15c942736
