# FreeGameTracker

## :memo: About

FreeGameTracker is a web app using the [GamerPower API](https://www.gamerpower.com/api-read) that helps you filter, sort, and track **free games, DLCs, and in-game items**.
Since the live version uses my own api key to fetch the data, requests my be limited due to API restrictions. Just make reasonable use of the website and you should be fine.

This is a learning project for me so the website may be rough around the edges and some features are yet to be implemented. You can expect several changes and upgrades in the future.

## 🔥 Getting started

### Set up the project files
1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Clone/download the repository ``git clone https://github.com/marcodamianperez/free-game-tracker``
3. Cd into the project folder ``cd free-game-tracker``
4. Install dependencies using ``npm install``
### Get your own API KEY
5. Go to [RapidAPI](https://rapidapi.com/digiwalls/api/gamerpower) and register/login
6. Create a new App and go to 'Authorization', then copy the Application key to your clipboard
### Set up your dev environment
7. Back to the repo, in the root folder create a file called ``.env`` and paste this: ``API_KEY=YOUR_API_KEY`` where ``YOUR_API_KEY`` is the key from RapidAPI. Make sure the api key is enclosed in quotation marks
8. Run development server using ``npm run dev``
9. Open your browser and go to  http://localhost:1234/

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

![phone](https://i.imgur.com/PHW6gOU.png)
![laptop](https://i.imgur.com/wlSummI.png)
