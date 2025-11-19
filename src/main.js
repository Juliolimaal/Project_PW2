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