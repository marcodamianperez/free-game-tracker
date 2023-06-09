export const BASE_URL = "https://gamerpower.p.rapidapi.com/api/";
export const API_KEY = process.env.API_KEY;

export const initialOptions =
  "filter?platform=steam.epic-games-store.android.ps4.ps5&type=game.loot&sort-by=popularity";
export const relatedOptions =
  "filter?platform=itchio.epic-games-store.ios.ps4.xbox-one&type=game.loot&sort-by=value";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
  },
};

export const qtyGames = document.querySelector("#qtyGames");
export const qtyDlc = document.querySelector("#qtyDlc");
export const qtyBeta = document.querySelector("#qtyBeta");
export const cardsContainer = document.querySelector("#cards-container");
export const menuFilter = document.querySelector("#menu-filter");

export const giveaway = document.querySelector("#giveaway");
