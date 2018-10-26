const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request_helper.js");

const Monsters = function () {
  this.monsters = [];
};

  Monsters.prototype.getData = function () {
    const url = "http://www.dnd5eapi.co/api/monsters/";
      const request = new Request(url);
      request.get()
        .then( (monsters) => {
          this.monsters = monsters;
          PubSub.publish("Monsters:Monsters-ready", this.monsters);
        })
        .catch((error) => {
          PubSub.publish("Monsters:error", error);
        })
  };

module.exports = Monsters;
