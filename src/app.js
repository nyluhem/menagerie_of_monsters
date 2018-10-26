const Monsters = require("./models/monsters.js");


document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded.")

  const monsters = new Monsters();
  monsters.getData()
  console.log(monsters)

});
