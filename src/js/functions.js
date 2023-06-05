import * as globals from './globals.js';

export const getGiveaways = async (param = '') => {
    try {
        const response = await fetch(`${globals.BASE_URL}${param}`, globals.options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const showQtyOfGiveaways = async () => {
    const giveaways = await getGiveaways('giveaways');
    const totalGames = giveaways.filter(giveaway => giveaway.type.toLowerCase() === 'game');
    const totalDlc = giveaways.filter(giveaway => giveaway.type.toLowerCase() === 'dlc');
    const totalBeta = giveaways.filter(giveaway => giveaway.type.toLowerCase() === 'early access');
    globals.qtyGames.textContent = totalGames.length;
    globals.qtyDlc.textContent = totalDlc.length;
    globals.qtyBeta.textContent = totalBeta.length;
}

export const renderGiveaways = async (options) => {
    const giveaways = await getGiveaways(options);
    console.log(giveaways);

    //globals.cardsContainer.innerHTML = '';

    giveaways.forEach(giveaway => {

        globals.cardsContainer.innerHTML += `
        <div class="card">
            <a href="./pages/details.html" class="card__image" id="${giveaway.id}">
                <img src="${giveaway.thumbnail}" alt="thumbnail">
            </a>
            <div class="card__body">
                <a href="./pages/details.html" class="card__title" title="${giveaway.title}" id="${giveaway.id}">
                    ${giveaway.title}
                </a>
                <div class="card__info">
                    <div class="card__price">
                        <span class="badge badge--ghost">Free</span>
                        <span class="card__price-previous">${giveaway.worth !== 'N/A' ? giveaway.worth : ''}</span>
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
                    <a href="./pages/details.html" class="btn btn--color" id="${giveaway.id}">View Giveaway</a>
                </div>
                <div class="card__metric">
                    <i class="bi bi-people-fill"></i> ${giveaway.users} times claimed
                </div>
            </div>
        </div>
        `;
    });
}