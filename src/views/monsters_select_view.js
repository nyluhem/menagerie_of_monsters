const PubSub = require('../helpers/pub_sub.js');

const SelectMonster = function (element) {
  this.element = element;
};

  SelectMonster.prototype.bindEvents = function () {
    PubSub.subscribe("Monsters:all-monsters-ready", (evt) => {
      const allMonsters = evt.detail;
      console.log(allMonsters);
      this.populate(allMonsters);
    });
    this.element.addEventListener("change", (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish("SelectMonster:change", selectedIndex);
    });
  };

  SelectMonster.prototype.populate = function (monstersData) {
    // console.log(monstersData)
    monstersData.forEach((monster, index) => {
      const option = document.createElement("option");
      option.textContent = monster.name;
      option.value = index;
      this.element.appendChild(option)
    });
  };

module.exports = SelectMonster
