const $logs = document.querySelector("#logs");
import generateLog from "./fightLog.js";
class Pokemon {
  constructor(props) {
    this.name = props.name;
    this.defaultHP = props.defaultHP;
    this.damageHP = props.damageHP;
    this.elHP = props.elHP;
    this.elProgressbar = props.elProgressbar;
    this.changeHp = props.changeHp;
  }

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

  changeHP = (btn, count, charcter, enemy) => {
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
      btn.disabled = true;
    }

    this.renderHP();
  };
}

export default Pokemon;
