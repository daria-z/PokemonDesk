import Pokemon from "./pokemon.js";
import { random, getElByID, countBtn } from "./utils.js";

const $btn = getElByID("btn-kick");
const $btn2 = getElByID("btn-kick-2");

const pikachu = new Pokemon({
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: getElByID("health-character"),
  elProgressbar: getElByID("progressbar-character"),
});

const charmander = new Pokemon({
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: getElByID("health-enemy"),
  elProgressbar: getElByID("progressbar-enemy"),
});

let btnCountJolt = countBtn(6, $btn);

let btnElectroBall = countBtn(6, $btn2);

$btn.addEventListener("click", function () {
  pikachu.changeHP($btn, random(60, 20), pikachu, charmander);
  charmander.changeHP($btn, random(60, 20), charmander, pikachu);
  btnCountJolt();
});

$btn2.addEventListener("click", function () {
  pikachu.changeHP($btn2, random(20), pikachu, charmander);
  charmander.changeHP($btn2, random(20), charmander, pikachu);
  btnElectroBall();
});

function init() {
  console.log("Start Game!");
  pikachu.renderHP();
  charmander.renderHP();
}

init();
