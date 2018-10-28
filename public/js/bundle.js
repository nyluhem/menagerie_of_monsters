/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Monsters = __webpack_require__(/*! ./models/monsters.js */ \"./src/models/monsters.js\");\nconst SelectMonster = __webpack_require__(/*! ./views/monsters_select_view.js */ \"./src/views/monsters_select_view.js\")\nconst SelectedMonster = __webpack_require__(/*! ./views/monster_view.js */ \"./src/views/monster_view.js\")\nconst MonsterSearchView = __webpack_require__(/*! ./views/monster_search_view.js */ \"./src/views/monster_search_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const monsters = new Monsters();\n  monsters.getData()\n  monsters.bindEvents()\n\n  const monsterNameForm = document.querySelector(\"form#monster-name-form\")\n  const monsterNameFormView = new MonsterSearchView(monsterNameForm);\n  monsterNameFormView.bindEvents();\n\n  const selectedElement = document.querySelector(\"select#monsters\");\n  const monsterDropdown = new SelectMonster(selectedElement);\n  monsterDropdown.bindEvents()\n\n  const infoSec = document.querySelector(\"div#monster\");\n  const selectedMonster = new SelectedMonster(infoSec);\n  selectedMonster.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n    // console.log(`channel: ${channel}, payload: ${payload}`);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n    // console.log(`channel: ${channel}`);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then( (response) => response.json() );\n};\n\n// Request.prototype.get = function (onComplete, onError) {\n//   const xhr = new XMLHttpRequest();\n//   xhr.open('GET', this.url);\n//   xhr.send();\n//\n//   xhr.addEventListener('load', () => {\n//     if (xhr.status !== 200) {\n//       onError(xhr.status);\n//       return;\n//     }\n//\n//     const jsonString = xhr.responseText;\n//     const data = JSON.parse(jsonString);\n//     onComplete(data);\n//   });\n// };\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/monsters.js":
/*!********************************!*\
  !*** ./src/models/monsters.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst Monsters = function () {\n  this.monsters = [];\n};\n\nMonsters.prototype.getData = function () {\n  const url = `http://www.dnd5eapi.co/api/monsters/`;\n    const request = new Request(url);\n    request.get()\n      .then( (monsters) => {\n        this.monsters = monsters.results;\n        PubSub.publish(\"Monsters:all-monsters-ready\", this.monsters);\n        PubSub.subscribe(\"SelectMonster:change\", (evt) => {\n          const selectedIndex = evt.detail;\n          console.log(selectedIndex)\n          this.publishMonsterDetail(selectedIndex);\n        })\n      })\n      .catch((error) => {\n        PubSub.publish(\"Monsters:error\", error);\n      })\n};\n\nMonsters.prototype.publishMonsterDetail = function (monsterIndex) {\n  id = parseInt(monsterIndex) + 1\n  // console.log(id)\n  const url = `http://www.dnd5eapi.co/api/monsters/${id}`\n  const request = new Request(url)\n    request.get()\n      .then((monster) => {\n      this.monster = monster\n      console.log(monster)\n      PubSub.publish(\"Monster:selected-monster-ready\", this.monster);\n      })\n};\n\nMonsters.prototype.bindEvents = function () {\n  PubSub.subscribe(\"Monster:search-monster-ready\", (evt) =>{\n    const monsterName = evt.detail\n    const capitalMonster = monsterName.replace(/\\b\\w/g, l => l.toUpperCase())\n    console.log(capitalMonster)\n    const trimmedCapitalisedMonster = capitalMonster.trim();\n    this.getName(trimmedCapitalisedMonster)\n  });\n};\n\nMonsters.prototype.getName = function (monsterName) {\n  const link = `http://www.dnd5eapi.co/api/monsters?name=${monsterName}`;\n  const request = new Request(link);\n  request.get()\n    .then( (monster) => {\n      this.monster = monster.results;\n      console.log(this.monster[0].url);\n      this.publishByUrl(this.monster[0].url);\n    });\n};\n\nMonsters.prototype.publishByUrl = function (url) {\n  const request = new Request(url);\n    request.get()\n      .then((monster) => {\n        this.monster = monster\n        console.log(this.monster)\n        PubSub.publish(\"Monster:selected-monster-ready\", this.monster);\n      })\n};\n\n\n\nmodule.exports = Monsters;\n\n\n//# sourceURL=webpack:///./src/models/monsters.js?");

/***/ }),

/***/ "./src/views/monster_search_view.js":
/*!******************************************!*\
  !*** ./src/views/monster_search_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst MonsterSearchView = function (formElement) {\n  this.formElement = formElement\n};\n\n  MonsterSearchView.prototype.bindEvents = function () {\n    this.formElement.addEventListener(\"submit\", (evt) => {\n      evt.preventDefault();\n      const monsterName = evt.target[\"monster-name\"].value;\n      console.log(monsterName)\n      PubSub.publish(\"Monster:search-monster-ready\", monsterName);\n      evt.target.reset();\n    });\n  };\n\nmodule.exports = MonsterSearchView\n\n\n//# sourceURL=webpack:///./src/views/monster_search_view.js?");

/***/ }),

/***/ "./src/views/monster_view.js":
/*!***********************************!*\
  !*** ./src/views/monster_view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectedMonster = function (container) {\n  this.container = container;\n};\n\n  SelectedMonster.prototype.bindEvents = function () {\n    PubSub.subscribe(\"Monster:selected-monster-ready\", (evt) => {\n      const monster = evt.detail;\n      this.render(monster);\n    });\n  };\n\n  SelectedMonster.prototype.render = function (monsterInfo) {\n    const infoMonsterName = document.createElement(\"h1\");\n    infoMonsterName.textContent = `${monsterInfo.name} (CR:${monsterInfo.challenge_rating})`;\n\n    const infoMonsterAlignment = document.createElement(\"p\");\n    infoMonsterAlignment.textContent = `Alignment: ${monsterInfo.alignment}`;\n\n    const infoMonsterSizeType = document.createElement(\"h2\");\n    infoMonsterSizeType.textContent = `${monsterInfo.size} ${monsterInfo.type}`;\n\n    const infoMonsterStats = document.createElement(\"p\");\n    infoMonsterStats.textContent =\n      `Stats: Str (${monsterInfo.strength}), Dex: (${monsterInfo.dexterity}), Con: (${monsterInfo.constitution}), Wis: (${monsterInfo.wisdom}), Int: (${monsterInfo.intelligence}), Cha: (${monsterInfo.charisma})`;\n\n    const infoMonsterSpeed = document.createElement(\"p\");\n    infoMonsterSpeed.textContent = `Speed: ${monsterInfo.speed}`;\n\n    this.container.innerHTML = \"\";\n    this.container.appendChild(infoMonsterName);\n    this.container.appendChild(infoMonsterSizeType);\n    this.container.appendChild(infoMonsterAlignment);\n    this.container.appendChild(infoMonsterSpeed);\n    this.container.appendChild(infoMonsterStats);\n  };\n\nmodule.exports = SelectedMonster;\n\n\n//# sourceURL=webpack:///./src/views/monster_view.js?");

/***/ }),

/***/ "./src/views/monsters_select_view.js":
/*!*******************************************!*\
  !*** ./src/views/monsters_select_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectMonster = function (element) {\n  this.element = element;\n};\n\n  SelectMonster.prototype.bindEvents = function () {\n    PubSub.subscribe(\"Monsters:all-monsters-ready\", (evt) => {\n      const allMonsters = evt.detail;\n      console.log(allMonsters);\n      this.populate(allMonsters);\n    });\n    this.element.addEventListener(\"change\", (evt) => {\n      const selectedIndex = evt.target.value;\n      PubSub.publish(\"SelectMonster:change\", selectedIndex);\n    });\n  };\n\n  SelectMonster.prototype.populate = function (monstersData) {\n    // console.log(monstersData)\n    monstersData.forEach((monster, index) => {\n      const option = document.createElement(\"option\");\n      option.textContent = monster.name;\n      option.value = index;\n      this.element.appendChild(option)\n    });\n  };\n\nmodule.exports = SelectMonster\n\n\n//# sourceURL=webpack:///./src/views/monsters_select_view.js?");

/***/ })

/******/ });