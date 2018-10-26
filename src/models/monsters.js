const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request_helper.js");

const Monsters = function () {
  this.monsters = [];
};

  Monsters.prototype.getIndividualData = function () {

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





  // Monsters.prototype.getData = function (monsterIndex) {
  //   id = monsterIndex + 1
  //   const url = `http://www.dnd5eapi.co/api/monsters/${id}`;
  //     const request = new Request(url);
  //     request.get()
  //       .then( (monsters) => {
  //         this.monsters = monsters.results;
  //         PubSub.publish("Monsters:all-monsters-ready", this.monsters);
  //       })
  //       .catch((error) => {
  //         PubSub.publish("Monsters:error", error);
  //       })
  // };


// Activity.prototype.getData = function (activityType) {
// const url = `https://www.boredapi.com/api/activity?type=${ activityType }`;
//   const request = new Request(url);
//   request.get()
//     .then( (data) => {
//       this.data = data;
//       PubSub.publish("Activity:activity-ready", this.data);
//     })
//     .catch((error) => {
//       PubSub.publish("Activity:error", error)
//     })
// };

module.exports = Monsters;
