import Pokemon from "./pokemon.js";
import { countBtn } from "./utils.js";

class Game {
  getPokemons = async () => {
    const response = await fetch(
      "https://reactmarathon-api.netlify.app/api/pokemons?random=true"
    );
    const body = await response.json();
    return body;
  };

  getDamage = async (characterId, enemyId, attackId) => {
    const response = await fetch(
      `https://reactmarathon-api.netlify.app/api/fight?player1id=${characterId}&attackId=${attackId}&player2id=${enemyId}`
    );
    const body = await response.json();
    return body;
  };

  start = async () => {
    const pokemon1 = await this.getPokemons();
    const pokemon2 = await this.getPokemons();

    let player1 = new Pokemon({
      ...pokemon1,
      selectors: "player1",
    });

    let player2 = new Pokemon({
      ...pokemon2,
      selectors: "player2",
    });

    player1.renderPokemon();
    player2.renderPokemon();

    const $control = document.querySelector(".control");
    player1.attacks.forEach((item) => {
      const $btn = document.createElement("button");
      $btn.classList.add("button");
      $btn.innerText = item.name;
      $control.appendChild($btn);
      const btnCount = countBtn(item.maxCount, $btn);


      $btn.addEventListener("click", () => {
        const kick = async () => {
          const damage = await this.getDamage(player1.id, player2.id, item.id);
          player2.changeHP(
            damage.kick.player2,
            player2,
            player1
          );
          player1.changeHP(
            damage.kick.player1,
            player1,
            player2
          );
          btnCount();
        };

        kick();
      });
    });
  };
}

const game = new Game();

game.start();
