const PubSub = require('../helpers/pub_sub.js');

const SelectedMonster = function (container) {
  this.container = container;
};

  SelectedMonster.prototype.bindEvents = function () {
    PubSub.subscribe("Monster:selected-monster-ready", (evt) => {
      const monster = evt.detail;
      this.render(monster);
    });
  };

  SelectedMonster.prototype.render = function (monsterInfo) {
    const infoMonsterName = document.createElement("h1");
    infoMonsterName.textContent = `Name: ${monsterInfo.name}`;
    const infoMonsterAlignment = document.createElement("p");
    infoMonsterAlignment.textContent = `Alignment: ${monsterInfo.alignment}`;

    const infoMonsterSize = document.createElement("h2");
    infoMonsterSize.textContent = `Size: ${monsterInfo.size}`;

    const infoMonsterStats = document.createElement("p");
    infoMonsterStats.textContent =
      `Stats: Str (${monsterInfo.strength}), Dex: (${monsterInfo.dexterity}), Con: (${monsterInfo.constitution}), Wis: (${monsterInfo.wisdom}), Int: ${monsterInfo.intelligence}, Cha: (${monsterInfo.charisma})`;

    const infoMonsterSpeed = document.createElement("p");
    infoMonsterSpeed.textContent = `Speed: ${monsterInfo.speed}`;


    this.container.innerHTML = "";
    this.container.appendChild(infoMonsterName);
    this.container.appendChild(infoMonsterSize);
    this.container.appendChild(infoMonsterAlignment);
    this.container.appendChild(infoMonsterSpeed);
    this.container.appendChild(infoMonsterStats);
  };


module.exports = SelectedMonster;
