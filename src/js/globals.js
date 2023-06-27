export const BASE_URL = "https://gamerpower.p.rapidapi.com/api/";
export const API_KEY = "4602bf6bb7msh3f44fa8d4389f04p1aa48djsn1fff21c0b953";

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
