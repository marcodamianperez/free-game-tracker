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
                        <a href="/free-game-tracker/pages/details.html" class="btn btn--color" data-id="${
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

export const renderDetails = (details) => {
  let platforms = details.platforms.split(",");
  platforms = platforms
    .map((p) => `<span class="badge badge--solid">${p}</span>`)
    .join("");

  let instructions = details.instructions.split("\r\n");
  instructions = instructions
    .map((i) => `<p class="paragraph">${i}</p>`)
    .join("");

  globals.giveaway.innerHTML = `
  <div class="giveaway__image">
  <img src="${details.image}" alt="giveaway image" />
</div>
<div class="giveaway__title">${details.title}</div>
<div class="giveaway__info">
  <div class="giveaway__info-platform">
    <span>${details.type}</span><span>|</span>
    ${platforms}
  </div>
  <div class="giveaway__info-price">
    <span class="badge badge--ghost">Free</span>
    <span class="card__price-previous">${
      details.worth !== "N/A" ? details.worth : ""
    }</span>
  </div>
  <div class="giveaway__info-social">
    <i class="bi bi-share-fill"></i>
    <i class="bi bi-heart"></i>
  </div>
</div>
<hr class="u-break" />
<p class="paragraph">
  ${details.description.replace(/\n/g, "<br>")}
</p>
<div class="giveaway__instructions">
  <div class="giveaway__instructions-title">Instructions</div>
  ${instructions}
</div>
<div class="giveaway__cta">
  <span class="giveaway__cta-time-left">
    <i class="bi bi-clock"></i><span>
      ${calculateTimeLeft(details.end_date)}
    </span>
  </span>
  <span class="giveaway__cta-times-claimed">
    <i class="bi bi-people-fill"></i><span>${details.users} times claimed</span>
  </span>
  <a href="${
    details.open_giveaway_url
  }" target="_blank" class="btn btn--color giveaway__cta-btn btn-icon"
    >Get Giveaway<i class="bi bi-box-arrow-up-right"></i
  ></a>
</div>
  `;

  renderGiveaways(globals.relatedOptions);
};

const calculateTimeLeft = (date) => {
  if (date === "N/A") {
    return "Limited time";
  }

  const now = new Date();
  const endDate = new Date(date);
  const diff = endDate.getTime() - now.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let timeLeft;

  if (days > 0) {
    timeLeft = `${days} day(s) left`;
  } else if (hours > 0) {
    timeLeft = `${hours} hour(s) left`;
  } else if (minutes > 0) {
    timeLeft = `${minutes} minute(s) left`;
  } else {
    timeLeft = "Less than a minute left";
  }

  return timeLeft;
};
