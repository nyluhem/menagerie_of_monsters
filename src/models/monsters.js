const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request_helper.js");

const Monsters = function () {
  this.monsters = [];
};

Monsters.prototype.getData = function () {
  const url = `http://www.dnd5eapi.co/api/monsters/`;
    const request = new Request(url);
    request.get()
      .then( (monsters) => {
        this.monsters = monsters.results;
        PubSub.publish("Monsters:all-monsters-ready", this.monsters);
        PubSub.subscribe("SelectMonster:change", (evt) => {
          const selectedIndex = evt.detail;
          console.log(selectedIndex)
          this.publishMonsterDetail(selectedIndex);
        })
      })
      .catch((error) => {
        PubSub.publish("Monsters:error", error);
      })
};

Monsters.prototype.publishMonsterDetail = function (monsterIndex) {
  id = parseInt(monsterIndex) + 1
  // console.log(id)
  const url = `http://www.dnd5eapi.co/api/monsters/${id}`
  const request = new Request(url)
    request.get()
      .then((monster) => {
      this.monster = monster
      console.log(monster)
      PubSub.publish("Monster:selected-monster-ready", this.monster);
      })
};

Monsters.prototype.bindEvents = function () {
  PubSub.subscribe("Monster:search-monster-ready", (evt) =>{
    const monsterName = evt.detail
    const capitalMonster = monsterName.replace(/\b\w/g, l => l.toUpperCase())
    console.log(capitalMonster)
    const trimmedCapitalisedMonster = capitalMonster.trim();
    this.getName(trimmedCapitalisedMonster)
  });
};

Monsters.prototype.getName = function (monsterName) {
  const link = `http://www.dnd5eapi.co/api/monsters?name=${monsterName}`;
  const request = new Request(link);
  request.get()
    .then( (monster) => {
      this.monster = monster.results;
      console.log(this.monster[0].url);
      this.publishByUrl(this.monster[0].url);
    });
};

Monsters.prototype.publishByUrl = function (url) {
  const request = new Request(url);
    request.get()
      .then((monster) => {
        this.monster = monster
        console.log(this.monster)
        PubSub.publish("Monster:selected-monster-ready", this.monster);
      })
};



module.exports = Monsters;
