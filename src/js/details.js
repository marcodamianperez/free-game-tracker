import { getDetails, handlerDetails } from "./functions";
import { cardsContainer } from "./globals";

getDetails();
cardsContainer.addEventListener("click", (e) => handlerDetails(e));
