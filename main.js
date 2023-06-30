/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/images/home-background.jpg */ \"./src/assets/images/home-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* \n\n0 to 400px:         actual styles\n400ox to 600ox:     x-small\n600px to 900px:     small\n900px to 1200px:    medium\n1200px +:           large\n\n1em == 16px since em units in media queries are not affected by the root font-size setting and always refers to the font-size from the browser\n\n*/\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Barlow\", sans-serif;\n  background-color: #181A20;\n}\n\na,\na:link,\na:visited {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n@media (min-width: 25em) {\n  html {\n    font-size: 68.75%;\n  }\n}\n@media (min-width: 37.5em) {\n  html {\n    font-size: 75%;\n  }\n}\n@media (min-width: 56.25em) {\n  html {\n    font-size: 81.25%;\n  }\n}\n@media (min-width: 75em) {\n  html {\n    font-size: 87.5%;\n  }\n}\n\n.heading-primary {\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.heading-primary--main {\n  font-size: 3.2rem;\n}\n@media (min-width: 37.5em) {\n  .heading-primary--main {\n    font-size: 3.6rem;\n  }\n}\n.heading-primary--sub {\n  font-weight: 400;\n  font-size: 1.6rem;\n  width: 80%;\n}\n\n.heading-secondary {\n  color: #fff;\n  font-size: 2.5rem;\n}\n\n.heading-tertiary {\n  color: #fff;\n  font-size: 2rem;\n  font-weight: 400;\n}\n\n.paragraph {\n  font-size: 1.4rem;\n  line-height: 1.4;\n}\n@media (min-width: 56.25em) {\n  .paragraph {\n    grid-area: description;\n    font-size: 1.2rem;\n  }\n}\n\n.no-giveaways {\n  font-size: 2rem;\n  color: #3e434e;\n  padding: 4rem 0;\n}\n\n.u-container {\n  width: 85%;\n  max-width: 1200px;\n  margin: 0 auto;\n  height: 100%;\n  position: relative;\n}\n\n.u-margin-bottom-small {\n  margin-bottom: 2rem;\n}\n\n.u-margin-top-small {\n  margin-top: 2rem;\n}\n\n.u-padding-bottom-small {\n  padding-bottom: 2rem;\n}\n\n.u-break {\n  border: 0;\n  height: 1px;\n  background-image: linear-gradient(to right, #23272F, #3e434e, #23272F);\n}\n@media (min-width: 56.25em) {\n  .u-break {\n    grid-area: hr;\n  }\n}\n\n.u-d-none {\n  display: none;\n}\n\n.badge {\n  padding: 0.3rem;\n  text-transform: uppercase;\n  display: inline-block;\n  border-radius: 5px;\n  font-weight: 700;\n  font-size: 1rem;\n}\n@media (min-width: 37.5em) {\n  .badge {\n    font-size: 0.9rem;\n  }\n}\n@media (min-width: 37.5em) {\n  .badge {\n    font-size: 0.8rem;\n  }\n}\n.badge--ghost {\n  color: #62C462;\n  border: 1px solid #62C462;\n}\n.badge--solid {\n  background-color: #aaa;\n  color: #3e434e;\n  border: none;\n}\n\n.btn {\n  padding: 1rem 2rem;\n  border-radius: 5px;\n  text-transform: uppercase;\n  display: inline-block;\n  font-size: 1.2rem;\n}\n@media (min-width: 37.5em) {\n  .btn {\n    font-size: 1rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .btn {\n    font-size: 0.9rem;\n    padding: 0.8rem 1.6rem;\n  }\n}\n@media (min-width: 75em) {\n  .btn {\n    font-size: 0.8rem;\n  }\n}\n.btn--white {\n  width: fit-content;\n  background-color: #fff;\n  color: #3e86d8;\n}\n.btn--color {\n  background-image: linear-gradient(to right, #3e86d8, #5B5CAC);\n  color: #fff;\n  width: 100%;\n  text-align: center;\n}\n.btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n}\n\n.card {\n  background-color: #3e434e;\n  border-radius: 1rem;\n  margin: 0 auto;\n  color: #fff;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);\n  width: 100%;\n  transition: all 200ms ease-in-out;\n}\n@media (min-width: 56.25em) {\n  .card:hover {\n    transform: scale(1.02);\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);\n  }\n}\n.card__image {\n  border-radius: 1rem 1rem 0 0;\n  overflow: hidden;\n  display: block;\n}\n.card__image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  vertical-align: middle;\n}\n.card__body {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n@media (min-width: 25em) {\n  .card__body {\n    padding: 1.5rem;\n  }\n}\n@media (min-width: 37.5em) {\n  .card__body {\n    padding: 1rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .card__body {\n    gap: 1.2rem;\n  }\n}\n.card__title {\n  text-transform: uppercase;\n  font-size: 2rem;\n  color: inherit;\n  display: block;\n}\n@media (min-width: 37.5em) {\n  .card__title {\n    font-size: 1.6rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .card__title {\n    font-size: 1.4rem;\n  }\n}\n.card__info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card__price {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.card__price-previous {\n  text-decoration: line-through;\n  font-size: 1.7rem;\n}\n@media (min-width: 37.5em) {\n  .card__price-previous {\n    font-size: 1.4rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .card__price-previous {\n    font-size: 1.2rem;\n  }\n}\n.card__platforms {\n  font-size: 1.4rem;\n}\n@media (min-width: 37.5em) {\n  .card__platforms {\n    font-size: 1.2rem;\n  }\n}\n@media (min-width: 37.5em) {\n  .card__platforms {\n    font-size: 1rem;\n  }\n}\n.card__platforms span {\n  color: #aaa;\n}\n.card__social {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n}\n.card__social i {\n  font-size: 1.8rem;\n}\n@media (min-width: 37.5em) {\n  .card__social i {\n    font-size: 1.5rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .card__social i {\n    font-size: 1.2rem;\n  }\n  .card__social i:hover {\n    cursor: pointer;\n  }\n}\n.card__metric {\n  font-size: 1.2rem;\n}\n@media (min-width: 37.5em) {\n  .card__metric {\n    font-size: 1rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .card__metric {\n    font-size: 0.9rem;\n  }\n}\n.card__metric i {\n  margin-right: 0.5rem;\n}\n\n.form {\n  display: flex;\n  gap: 1rem;\n}\n@media (min-width: 25em) {\n  .form {\n    gap: 3rem;\n  }\n}\n@media (min-width: 37.5em) {\n  .form {\n    gap: 6rem;\n  }\n}\n.form__field {\n  border: none;\n}\n.form__label {\n  color: #aaa;\n  font-size: 1.4rem;\n  margin-right: 0.5rem;\n}\n@media (min-width: 37.5em) {\n  .form__label {\n    font-size: 1.3rem;\n  }\n}\n.form__input {\n  border: none;\n  background-color: #23272F;\n  color: #fff;\n}\n@media (min-width: 75em) {\n  .form__input {\n    font-size: 1.1rem;\n  }\n}\n\n.menu-filter {\n  display: flex;\n  gap: 2rem;\n  overflow-x: scroll;\n}\n\n.menu-btn {\n  background-color: transparent;\n  border: none;\n  color: #aaa;\n  padding: 2rem 0;\n  white-space: nowrap;\n}\n.menu-btn:active {\n  color: #fff;\n}\n@media (min-width: 25em) {\n  .menu-btn {\n    font-size: 1.3rem;\n  }\n}\n@media (min-width: 37.5em) {\n  .menu-btn {\n    font-size: 1.2rem;\n  }\n}\n@media (min-width: 37.5em) {\n  .menu-btn {\n    font-size: 1.1rem;\n  }\n  .menu-btn:hover {\n    color: #fff;\n    cursor: pointer;\n  }\n}\n\n.navbar {\n  width: 85%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n@media (min-width: 37.5em) {\n  .navbar {\n    padding: 2.5rem 0;\n  }\n}\n.navbar__items {\n  display: none;\n}\n@media (min-width: 37.5em) {\n  .navbar__items {\n    display: flex;\n    text-transform: uppercase;\n    gap: 2rem;\n    letter-spacing: 1px;\n  }\n}\n.navbar__items-show {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100vw;\n  z-index: 1;\n  background-color: rgba(24, 26, 32, 0.9);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n@media (min-width: 25em) {\n  .navbar__items-show {\n    padding: 1rem 0;\n  }\n}\n.navbar__item {\n  width: 100%;\n  text-align: center;\n}\n.navbar__link {\n  display: inline-block;\n  color: #fff;\n  font-size: 1.6rem;\n  width: 100%;\n  padding: 1.5rem 0;\n  position: relative;\n}\n@media (min-width: 37.5em) {\n  .navbar__link {\n    font-size: 1.2rem;\n    padding: 0;\n  }\n}\n@media (min-width: 56.25em) {\n  .navbar__link::before {\n    content: \"\";\n    background-color: #fff;\n    width: 0;\n    height: 1px;\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    transition: width 0.3s;\n  }\n  .navbar__link:hover::before {\n    width: 100%;\n  }\n}\n.navbar__link:active {\n  color: #aaa;\n}\n.navbar__logo {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  color: #fff;\n}\n@media (min-width: 37.5em) {\n  .navbar__logo {\n    font-size: 1.3rem;\n  }\n}\n.navbar--solid-background {\n  background-color: #181A20;\n}\n\n.hamburger {\n  border: 1px solid #fff;\n  border-radius: 3px;\n  width: 3.5rem;\n  height: 3rem;\n  padding: 0.3rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n.hamburger div {\n  height: 2px;\n  width: 70%;\n  background-color: #fff;\n}\n@media (min-width: 37.5em) {\n  .hamburger {\n    display: none;\n  }\n}\n\n.cards {\n  background-color: #23272F;\n  padding: 2rem 0;\n}\n\n.footer {\n  background-color: #181A20;\n  padding: 2rem 0;\n}\n.footer__text {\n  color: #fff;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n@media (min-width: 25em) {\n  .footer__text {\n    font-size: 1rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .footer__text {\n    font-size: 0.9rem;\n  }\n}\n\n.author,\n.author:link,\n.author:visited {\n  font-size: inherit;\n  color: inherit;\n  text-decoration: underline;\n}\n@media (min-width: 56.25em) {\n  .author,\n  .author:link,\n  .author:visited {\n    text-decoration: none;\n  }\n  .author:hover,\n  .author:link:hover,\n  .author:visited:hover {\n    text-decoration: underline;\n  }\n}\n\n.serving {\n  background-color: #181A20;\n  padding: 2rem 0;\n}\n.serving__text {\n  color: #fff;\n  font-size: 1.6rem;\n  margin: 1rem 0;\n}\n@media (min-width: 37.5em) {\n  .serving__text {\n    font-size: 1.4rem;\n  }\n}\n.serving__text i {\n  color: #3e86d8;\n  margin-right: 1rem;\n}\n\n.details {\n  background-color: #23272F;\n  padding-top: 2rem;\n}\n\n.giveaway {\n  display: grid;\n  gap: 2rem;\n  color: #fff;\n}\n@media (min-width: 56.25em) {\n  .giveaway {\n    grid-template-areas: \"img title cta\" \"img info cta\" \"hr hr hr\" \"description description description\" \"instructions instructions instructions\";\n    grid-template-columns: 1fr 1fr 40%;\n    gap: 1.5rem;\n  }\n}\n.giveaway__image {\n  border-radius: 1rem;\n  overflow: hidden;\n}\n@media (min-width: 56.25em) {\n  .giveaway__image {\n    grid-area: img;\n  }\n}\n.giveaway__image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.giveaway__title {\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: 700;\n}\n@media (min-width: 56.25em) {\n  .giveaway__title {\n    grid-area: title;\n    font-size: 1.6rem;\n  }\n}\n.giveaway__info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1.5rem;\n}\n@media (min-width: 56.25em) {\n  .giveaway__info {\n    grid-area: info;\n    gap: 1rem;\n  }\n}\n.giveaway__info-platform {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n  font-size: 1.4rem;\n  white-space: nowrap;\n}\n@media (min-width: 56.25em) {\n  .giveaway__info-platform {\n    font-size: 1rem;\n  }\n}\n.giveaway__info-price {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.giveaway__info-social {\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n@media (min-width: 37.5em) {\n  .giveaway__info-social {\n    font-size: 1.8rem;\n  }\n}\n@media (min-width: 56.25em) {\n  .giveaway__info-social:hover {\n    cursor: pointer;\n  }\n}\n@media (min-width: 75em) {\n  .giveaway__info-social {\n    font-size: 1.6rem;\n  }\n}\n.giveaway__instructions {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 56.25em) {\n  .giveaway__instructions {\n    grid-area: instructions;\n  }\n}\n.giveaway__instructions-title {\n  font-size: 2.2rem;\n}\n@media (min-width: 56.25em) {\n  .giveaway__instructions-title {\n    font-size: 2rem;\n  }\n}\n.giveaway__cta {\n  display: grid;\n  gap: 1.5rem;\n  grid-template-areas: \"time-left  times-claimed\" \"btn        btn\";\n  background-color: #3e434e;\n  padding: 2rem;\n  border-radius: 1rem;\n}\n@media (min-width: 56.25em) {\n  .giveaway__cta {\n    grid-area: cta;\n    align-items: center;\n    padding: 1.5rem;\n  }\n}\n.giveaway__cta-time-left, .giveaway__cta-times-claimed {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n@media (min-width: 56.25em) {\n  .giveaway__cta-time-left, .giveaway__cta-times-claimed {\n    font-size: 1rem;\n  }\n}\n.giveaway__cta-time-left {\n  grid-area: time-left;\n}\n.giveaway__cta-times-claimed {\n  grid-area: times-claimed;\n}\n.giveaway__cta-btn {\n  grid-area: btn;\n}\n@media (min-width: 37.5em) {\n  .giveaway__cta-btn {\n    width: 75%;\n    margin: 0 auto;\n  }\n}\n@media (min-width: 56.25em) {\n  .giveaway__cta-btn {\n    width: 100%;\n    margin: 0;\n    font-size: 1rem;\n  }\n}\n\n.header {\n  height: 70vh;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.header__text-box {\n  position: absolute;\n  top: 25%;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n@media (min-width: 37.5em) {\n  .header__text-box {\n    top: 17%;\n    width: 70%;\n  }\n}\n\n.filter {\n  background-color: #23272F;\n}\n\n.card-grid-container {\n  display: grid;\n  gap: 2rem;\n}\n@media (min-width: 37.5em) {\n  .card-grid-container {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 56.25em) {\n  .card-grid-container {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media (min-width: 75em) {\n  .card-grid-container {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 1.5rem;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://free-game-tracker/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://free-game-tracker/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://free-game-tracker/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterByPlatform: () => (/* binding */ filterByPlatform),\n/* harmony export */   getDetails: () => (/* binding */ getDetails),\n/* harmony export */   getGiveaways: () => (/* binding */ getGiveaways),\n/* harmony export */   handlerDetails: () => (/* binding */ handlerDetails),\n/* harmony export */   renderDetails: () => (/* binding */ renderDetails),\n/* harmony export */   renderGiveaways: () => (/* binding */ renderGiveaways),\n/* harmony export */   showQtyOfGiveaways: () => (/* binding */ showQtyOfGiveaways)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ \"./src/js/globals.js\");\n\r\n\r\nconst getGiveaways = async (param = \"\") => {\r\n  try {\r\n    const response = await fetch(\r\n      `${_globals_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}${param}`,\r\n      _globals_js__WEBPACK_IMPORTED_MODULE_0__.options\r\n    );\r\n    const result = await response.json();\r\n    return result;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\nconst showQtyOfGiveaways = async () => {\r\n  const giveaways = await getGiveaways(\"giveaways\");\r\n  const totalGames = giveaways.filter(\r\n    (giveaway) => giveaway.type.toLowerCase() === \"game\"\r\n  );\r\n  const totalDlc = giveaways.filter(\r\n    (giveaway) => giveaway.type.toLowerCase() === \"dlc\"\r\n  );\r\n  const totalBeta = giveaways.filter(\r\n    (giveaway) => giveaway.type.toLowerCase() === \"early access\"\r\n  );\r\n  _globals_js__WEBPACK_IMPORTED_MODULE_0__.qtyGames.textContent = totalGames.length;\r\n  _globals_js__WEBPACK_IMPORTED_MODULE_0__.qtyDlc.textContent = totalDlc.length;\r\n  _globals_js__WEBPACK_IMPORTED_MODULE_0__.qtyBeta.textContent = totalBeta.length;\r\n};\r\n\r\nconst renderGiveaways = async (options) => {\r\n  const giveaways = await getGiveaways(options);\r\n\r\n  if (giveaways.status === 0) {\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__.cardsContainer.innerHTML = `<p class=\"no-giveaways\">No giveaways found</p>`;\r\n  } else {\r\n    _globals_js__WEBPACK_IMPORTED_MODULE_0__.cardsContainer.innerHTML = \"\";\r\n\r\n    giveaways.forEach((giveaway) => {\r\n      _globals_js__WEBPACK_IMPORTED_MODULE_0__.cardsContainer.innerHTML += `\r\n            <div class=\"card\">\r\n                <a href=\"./pages/details.html\" class=\"card__image\">\r\n                    <img src=\"${giveaway.thumbnail}\" alt=\"thumbnail\" data-id=\"${\r\n        giveaway.id\r\n      }\">\r\n                </a>\r\n                <div class=\"card__body\">\r\n                    <a href=\"./pages/details.html\" class=\"card__title\" title=\"${\r\n                      giveaway.title\r\n                    }\" data-id=\"${giveaway.id}\">\r\n                        ${giveaway.title}\r\n                    </a>\r\n                    <div class=\"card__info\">\r\n                        <div class=\"card__price\">\r\n                            <span class=\"badge badge--ghost\">Free</span>\r\n                            <span class=\"card__price-previous\">${\r\n                              giveaway.worth !== \"N/A\" ? giveaway.worth : \"\"\r\n                            }</span>\r\n                        </div>\r\n                        <span class=\"badge badge--solid\">${giveaway.type}</span>\r\n                    </div>\r\n                    <div class=\"card__platforms\">\r\n                        Available on:\r\n                        <span id=\"platforms\">${giveaway.platforms}</span>\r\n                    </div>\r\n                    <div class=\"card__social\">\r\n                        <i class=\"bi bi-share-fill\"></i>\r\n                        <i class=\"bi bi-heart\"></i>\r\n                        <a href=\"./pages/details.html\" class=\"btn btn--color\" data-id=\"${\r\n                          giveaway.id\r\n                        }\">View Giveaway</a>\r\n                    </div>\r\n                    <div class=\"card__metric\">\r\n                        <i class=\"bi bi-people-fill\"></i> ${\r\n                          giveaway.users\r\n                        } times claimed\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            `;\r\n    });\r\n  }\r\n};\r\n\r\nconst filterByPlatform = (e) => {\r\n  if (!e.target.classList.contains(\"filter\")) return;\r\n  const platform = e.target.dataset.id;\r\n  let queryString = \"\";\r\n  platform === \"all\"\r\n    ? (queryString = \"giveaways\")\r\n    : (queryString = `giveaways?platform=${platform}`);\r\n  renderGiveaways(queryString);\r\n};\r\n\r\nconst handlerDetails = (e) => {\r\n  e.target.hasAttribute(\"data-id\") &&\r\n    localStorage.setItem(\"id\", e.target.dataset.id);\r\n};\r\n\r\nconst getDetails = async () => {\r\n  const id = localStorage.getItem(\"id\");\r\n  try {\r\n    const response = await fetch(\r\n      `${_globals_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}giveaway?id=${id}`,\r\n      _globals_js__WEBPACK_IMPORTED_MODULE_0__.options\r\n    );\r\n    const data = await response.json();\r\n    renderDetails(data);\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\nconst renderDetails = (details) => {\r\n  let platforms = details.platforms.split(\",\");\r\n  platforms = platforms\r\n    .map((p) => `<span class=\"badge badge--solid\">${p}</span>`)\r\n    .join(\"\");\r\n\r\n  let instructions = details.instructions.split(\"\\r\\n\");\r\n  instructions = instructions\r\n    .map((i) => `<p class=\"paragraph\">${i}</p>`)\r\n    .join(\"\");\r\n\r\n  _globals_js__WEBPACK_IMPORTED_MODULE_0__.giveaway.innerHTML = `\r\n  <div class=\"giveaway__image\">\r\n  <img src=\"${details.image}\" alt=\"giveaway image\" />\r\n</div>\r\n<div class=\"giveaway__title\">${details.title}</div>\r\n<div class=\"giveaway__info\">\r\n  <div class=\"giveaway__info-platform\">\r\n    <span>${details.type}</span><span>|</span>\r\n    ${platforms}\r\n  </div>\r\n  <div class=\"giveaway__info-price\">\r\n    <span class=\"badge badge--ghost\">Free</span>\r\n    <span class=\"card__price-previous\">${\r\n      details.worth !== \"N/A\" ? details.worth : \"\"\r\n    }</span>\r\n  </div>\r\n  <div class=\"giveaway__info-social\">\r\n    <i class=\"bi bi-share-fill\"></i>\r\n    <i class=\"bi bi-heart\"></i>\r\n  </div>\r\n</div>\r\n<hr class=\"u-break\" />\r\n<p class=\"paragraph\">\r\n  ${details.description.replace(/\\n/g, \"<br>\")}\r\n</p>\r\n<div class=\"giveaway__instructions\">\r\n  <div class=\"giveaway__instructions-title\">Instructions</div>\r\n  ${instructions}\r\n</div>\r\n<div class=\"giveaway__cta\">\r\n  <span class=\"giveaway__cta-time-left\">\r\n    <i class=\"bi bi-clock\"></i><span>\r\n      ${calculateTimeLeft(details.end_date)}\r\n    </span>\r\n  </span>\r\n  <span class=\"giveaway__cta-times-claimed\">\r\n    <i class=\"bi bi-people-fill\"></i><span>${details.users} times claimed</span>\r\n  </span>\r\n  <a href=\"${\r\n    details.open_giveaway_url\r\n  }\" target=\"_blank\" class=\"btn btn--color giveaway__cta-btn btn-icon\"\r\n    >Get Giveaway<i class=\"bi bi-box-arrow-up-right\"></i\r\n  ></a>\r\n</div>\r\n  `;\r\n\r\n  renderGiveaways(_globals_js__WEBPACK_IMPORTED_MODULE_0__.relatedOptions);\r\n};\r\n\r\nconst calculateTimeLeft = (date) => {\r\n  if (date === \"N/A\") {\r\n    return \"Limited time\";\r\n  }\r\n\r\n  const now = new Date();\r\n  const endDate = new Date(date);\r\n  const diff = endDate.getTime() - now.getTime();\r\n\r\n  const seconds = Math.floor(diff / 1000);\r\n  const minutes = Math.floor(seconds / 60);\r\n  const hours = Math.floor(minutes / 60);\r\n  const days = Math.floor(hours / 24);\r\n\r\n  let timeLeft;\r\n\r\n  if (days > 0) {\r\n    timeLeft = `${days} day(s) left`;\r\n  } else if (hours > 0) {\r\n    timeLeft = `${hours} hour(s) left`;\r\n  } else if (minutes > 0) {\r\n    timeLeft = `${minutes} minute(s) left`;\r\n  } else {\r\n    timeLeft = \"Less than a minute left\";\r\n  }\r\n\r\n  return timeLeft;\r\n};\r\n\n\n//# sourceURL=webpack://free-game-tracker/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/globals.js":
/*!***************************!*\
  !*** ./src/js/globals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_KEY: () => (/* binding */ API_KEY),\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),\n/* harmony export */   cardsContainer: () => (/* binding */ cardsContainer),\n/* harmony export */   giveaway: () => (/* binding */ giveaway),\n/* harmony export */   initialOptions: () => (/* binding */ initialOptions),\n/* harmony export */   menuFilter: () => (/* binding */ menuFilter),\n/* harmony export */   options: () => (/* binding */ options),\n/* harmony export */   qtyBeta: () => (/* binding */ qtyBeta),\n/* harmony export */   qtyDlc: () => (/* binding */ qtyDlc),\n/* harmony export */   qtyGames: () => (/* binding */ qtyGames),\n/* harmony export */   relatedOptions: () => (/* binding */ relatedOptions)\n/* harmony export */ });\nconst BASE_URL = \"https://gamerpower.p.rapidapi.com/api/\";\r\nconst API_KEY = \"4602bf6bb7msh3f44fa8d4389f04p1aa48djsn1fff21c0b953\";\r\n\r\nconst initialOptions =\r\n  \"filter?platform=steam.epic-games-store.android.ps4.ps5&type=game.loot&sort-by=popularity\";\r\nconst relatedOptions =\r\n  \"filter?platform=itchio.epic-games-store.ios.ps4.xbox-one&type=game.loot&sort-by=value\";\r\n\r\nconst options = {\r\n  method: \"GET\",\r\n  headers: {\r\n    \"X-RapidAPI-Key\": API_KEY,\r\n    \"X-RapidAPI-Host\": \"gamerpower.p.rapidapi.com\",\r\n  },\r\n};\r\n\r\nconst qtyGames = document.querySelector(\"#qtyGames\");\r\nconst qtyDlc = document.querySelector(\"#qtyDlc\");\r\nconst qtyBeta = document.querySelector(\"#qtyBeta\");\r\nconst cardsContainer = document.querySelector(\"#cards-container\");\r\nconst menuFilter = document.querySelector(\"#menu-filter\");\r\n\r\nconst giveaway = document.querySelector(\"#giveaway\");\r\n\n\n//# sourceURL=webpack://free-game-tracker/./src/js/globals.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/js/functions.js\");\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.js */ \"./src/js/globals.js\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../sass/main.scss */ \"./src/sass/main.scss\");\n\r\n\r\n\r\n\r\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.menuFilter.addEventListener(\"click\", (e) => (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.filterByPlatform)(e));\r\n_globals_js__WEBPACK_IMPORTED_MODULE_1__.cardsContainer.addEventListener(\"click\", (e) => (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.handlerDetails)(e));\r\n\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.showQtyOfGiveaways)();\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.renderGiveaways)(_globals_js__WEBPACK_IMPORTED_MODULE_1__.initialOptions);\r\n\n\n//# sourceURL=webpack://free-game-tracker/./src/js/index.js?");

/***/ }),

/***/ "./src/assets/images/home-background.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/home-background.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9f20ffe0d84d80969a8.jpg\";\n\n//# sourceURL=webpack://free-game-tracker/./src/assets/images/home-background.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;