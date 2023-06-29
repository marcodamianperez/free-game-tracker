# FreeGameTracker

## :memo: About

FreeGameTracker is a web app using the [GamerPower API](https://www.gamerpower.com/api-read) that helps you filter, sort, and track free games, DLCs, and in-game items.
Since the live version uses my own api key to fetch the data, requests my be limited due to API restrictions. Just make reasonable use of the website and you should be fine.

This is a learning project for me so the website may be rough around the edges and some features are yet to be implemented. You can expect several changes and upgrades in the future.

## 🔥 Getting started

1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Clone/donwload the repository ``git clone https://github.com/marcodamianperez/free-game-tracker``
3. Cd into the project folder ``cd free-game-tracker``
4. Install dependencies using ``npm install``
5. Run development server using ``npm run start`` or just ``npm start``
6. Open your browser and go to  http://localhost:1234/

If you would like to use your own api key (which I strongly recommend it):

1. Go to [RapidAPI](https://rapidapi.com/digiwalls/api/gamerpower)
2. Register/login
3. Create a new App
4. Inside your new App go to 'Authorization'
5. Copy the Application key to your clipboard
6. Back to the repo, in ``globals.js`` replace the value of the ``API_KEY`` variable with your own api key

Assuming you installed the dependencies and the dev server is running you should be good to go.

## 🌐 Live version

Check out the live version [here](https://marcodamianperez.github.io/free-game-tracker/).

## 🌟 Features

- [X] Fetch games, DLCs and in-game items giveaway
- [X] Show giveaway details and proivde a direct link to it
- [X] Fully responsive website
- [X] Filter by platform
- [ ] Filter by type (game/dlc/item) _(currently working on it)_
- [ ] Sort by release date/value/popularity _(currently working on it)_
- [ ] Share giveaway with your friends
- [ ] Mark giveaway as favorite

## 📸 Screenshots

_Coming soon_
