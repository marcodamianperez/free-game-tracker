import {
  renderGiveaways,
  showQtyOfGiveaways,
  filterByPlatform,
} from "./functions.js";
import { menuFilter } from "./globals.js";

const initialOptions =
  "filter?platform=steam.epic-games-store.android.ps4.ps5&type=game.loot&sort-by=popularity";

menuFilter.addEventListener("click", (e) => filterByPlatform(e));

showQtyOfGiveaways();
renderGiveaways(initialOptions);
