import { renderGiveaways, showQtyOfGiveaways } from './functions.js';

const initialOptions = 'filter?platform=steam.epic-games-store.android.ps4.ps5&type=game.loot&sort-by=popularity';

showQtyOfGiveaways();
renderGiveaways(initialOptions);