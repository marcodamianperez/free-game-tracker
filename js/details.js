import { getDetails, handlerDetails } from "./functions.js";
import { cardsContainer } from "./globals.js";

getDetails();
cardsContainer.addEventListener("click", (e) => handlerDetails(e));
