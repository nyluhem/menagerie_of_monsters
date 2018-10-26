const Monsters = require("./models/monsters.js");
const SelectMonster = require("./views/monsters_select_view.js")
const SelectedMonster = require("./views/monster_view.js")
const MonsterSearchView = require("./views/monster_search_view.js")

document.addEventListener('DOMContentLoaded', () => {

  const monsters = new Monsters();
  monsters.getData()
  monsters.bindEvents()

  const monsterNameForm = document.querySelector("form#monster-name-form")
  const monsterNameFormView = new MonsterSearchView(monsterNameForm);
  monsterNameFormView.bindEvents();

  const selectedElement = document.querySelector("select#monsters");
  const monsterDropdown = new SelectMonster(selectedElement);
  monsterDropdown.bindEvents()

  const infoSec = document.querySelector("div#monster");
  const selectedMonster = new SelectedMonster(infoSec);
  selectedMonster.bindEvents();

});
