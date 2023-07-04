import {
  renderGiveaways,
  showQtyOfGiveaways,
  filterByPlatform,
  handlerDetails,
} from "./functions.js";
import { initialOptions, menuFilter, cardsContainer } from "./globals.js";

menuFilter.addEventListener("click", (e) => filterByPlatform(e));
cardsContainer.addEventListener("click", (e) => handlerDetails(e));

showQtyOfGiveaways();
renderGiveaways(initialOptions);
