const $logs = document.querySelector("#logs");
import generateLog from "./fightLog.js";
import { getElByID } from "./utils.js"


class Selectors {
  constructor(name) {
    this.elHP =  getElByID(`health-${name}`);
    this.elProgressbar =  getElByID(`progressbar-${name}`);
  }
}
class Pokemon extends Selectors{
  constructor({id, name, hp, type, selectors, img, attacks}) {
    super(selectors);
    this.id = id;
    this.name = name;
    this.type = type;
    this.defaultHP = hp;
    this.damageHP = hp;
    this.avatar = img;
    this.selectors = selectors;
    this.attacks = attacks;
  }

  renderPokemonView = () => {
    const $elImg = getElByID(`img-${this.selectors}`);
    $elImg.src = this.avatar;
    const $elName = getElByID(`name-${this.selectors}`);
    $elName.innerText = this.name;
  };

  renderHP = () => {
    this.renderHpLife();
    this.renderProgressbarHP();
  };

  renderHpLife = () => {
    const { damageHP, defaultHP, elHP } = this;
    elHP.innerText = damageHP + " / " + defaultHP;
  };

  renderProgressbarHP = () => {
    const { elProgressbar, damageHP } = this;
    elProgressbar.style.width = damageHP + "%";
  };

  changeHP = (count, character, enemy) => {
    this.damageHP -= count;

    const log =
      this === enemy
        ? generateLog(this, character, count, this.damageHP)
        : generateLog(this, enemy, count, this.damageHP);
    console.log(log);

    const $p = document.createElement("p");
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);

    if (this.damageHP <= 0) {
      this.damageHP = 0;
      alert("Бедный " + this.name + " проиграл бой");
    }
    this.renderHP();
  };

  renderPokemon() {
    this.renderHP();
    this.renderPokemonView();
  }

}

export default Pokemon;
