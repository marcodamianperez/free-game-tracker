import * as globals from "./globals.js";

export const getGiveaways = async (param = "") => {
  try {
    const response = await fetch(
      `${globals.BASE_URL}${param}`,
      globals.options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const showQtyOfGiveaways = async () => {
  const giveaways = await getGiveaways("giveaways");
  const totalGames = giveaways.filter(
    (giveaway) => giveaway.type.toLowerCase() === "game"
  );
  const totalDlc = giveaways.filter(
    (giveaway) => giveaway.type.toLowerCase() === "dlc"
  );
  const totalBeta = giveaways.filter(
    (giveaway) => giveaway.type.toLowerCase() === "early access"
  );
  globals.qtyGames.textContent = totalGames.length;
  globals.qtyDlc.textContent = totalDlc.length;
  globals.qtyBeta.textContent = totalBeta.length;
};

export const renderGiveaways = async (options) => {
  const giveaways = await getGiveaways(options);
  console.log(giveaways);

  if (giveaways.status === 0) {
    globals.cardsContainer.innerHTML = `<p class="no-giveaways">No giveaways found</p>`;
  } else {
    globals.cardsContainer.innerHTML = "";

    giveaways.forEach((giveaway) => {
      globals.cardsContainer.innerHTML += `
            <div class="card">
                <a href="./pages/details.html" class="card__image">
                    <img src="${giveaway.thumbnail}" alt="thumbnail" data-id="${
        giveaway.id
      }">
                </a>
                <div class="card__body">
                    <a href="./pages/details.html" class="card__title" title="${
                      giveaway.title
                    }" data-id="${giveaway.id}">
                        ${giveaway.title}
                    </a>
                    <div class="card__info">
                        <div class="card__price">
                            <span class="badge badge--ghost">Free</span>
                            <span class="card__price-previous">${
                              giveaway.worth !== "N/A" ? giveaway.worth : ""
                            }</span>
                        </div>
                        <span class="badge badge--solid">${giveaway.type}</span>
                    </div>
                    <div class="card__platforms">
                        Available on:
                        <span id="platforms">${giveaway.platforms}</span>
                    </div>
                    <div class="card__social">
                        <i class="bi bi-share-fill"></i>
                        <i class="bi bi-heart"></i>
                        <a href="./pages/details.html" class="btn btn--color" data-id="${
                          giveaway.id
                        }">View Giveaway</a>
                    </div>
                    <div class="card__metric">
                        <i class="bi bi-people-fill"></i> ${
                          giveaway.users
                        } times claimed
                    </div>
                </div>
            </div>
            `;
    });
  }
};

export const filterByPlatform = (e) => {
  if (!e.target.classList.contains("filter")) return;
  const platform = e.target.dataset.id;
  let queryString = "";
  platform === "all"
    ? (queryString = "giveaways")
    : (queryString = `giveaways?platform=${platform}`);
  console.log(queryString);
  renderGiveaways(queryString);
};

export const handlerDetails = (e) => {
  e.target.hasAttribute("data-id") &&
    localStorage.setItem("id", e.target.dataset.id);
};

export const getDetails = async () => {
  const id = localStorage.getItem("id");
  try {
    const response = await fetch(
      `${globals.BASE_URL}giveaway?id=${id}`,
      globals.options
    );
    const data = await response.json();
    renderDetails(data);
  } catch (error) {
    console.log(error);
  }
};

export const renderDetails = (details) => {};
