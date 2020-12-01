import Pokemon from "./pokemon.js";
import { random, getElByID, countBtn } from "./utils.js";
import generatePokemon from "./pokemons.js";

const $control = document.querySelector(".control");
const $btnStart = getElByID("start-game");

$btnStart.addEventListener("click", function () {
  console.log("Start Game!");

  let player1 = new Pokemon({
    ...generatePokemon(),
    selectors: "player1",
  });

  let player2 = new Pokemon({
    ...generatePokemon(),
    selectors: "player2",
  });

  player1.renderPokemon();
  player2.renderPokemon();
  $btnStart.remove();
  renderAttacks(player1, player2);
});

function renderAttacks(player1, player2) {
  player1.attacks.forEach((item) => {
    const $btn = document.createElement("button");
    $btn.classList.add("button");
    $btn.innerText = item.name;
    $control.appendChild($btn);
    let btnCount = countBtn(item.maxCount, $btn);

    $btn.addEventListener("click", () => {
      player2.changeHP(
        random(item.maxDamage, item.minDamage),
        player2,
        player1
      );
      player1.changeHP(
        random(player2.attacks[0].maxDamage, player2.attacks[0].minDamage),
        player1,
        player2
      );
      btnCount();

      if (player2.damageHP <= 0) {
        restartGame();
      }
    });
  });
}

function restartGame() {
  const allButtons = document.querySelectorAll(".control .button");
  allButtons.forEach(($item) => $item.remove());
  $control.appendChild($btnStart);
}
