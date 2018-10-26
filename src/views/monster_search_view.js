const PubSub = require("../helpers/pub_sub.js");

const MonsterSearchView = function (formElement) {
  this.formElement = formElement
};

  MonsterSearchView.prototype.bindEvents = function () {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const monsterName = evt.target["monster-name"].value;
      console.log(monsterName)
      PubSub.publish("Monster:search-monster-ready", monsterName);
      evt.target.reset();
    });
  };


module.exports = MonsterSearchView
