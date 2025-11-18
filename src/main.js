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