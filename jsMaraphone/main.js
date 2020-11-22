function $getElByID(id) {
  return document.getElementById(id);
}

const $btn = $getElByID("btn-kick");
const $btnIntervention = $getElByID("btn-intervention");
const $logs = document.querySelector('#logs');

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElByID("health-character"),
  elProgressbar: $getElByID("progressbar-character"),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHpLife: renderHpLife,
  renderProgressbarHP: renderProgressbarHP,
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: $getElByID("health-enemy"),
  elProgressbar: $getElByID("progressbar-enemy"),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHpLife: renderHpLife,
  renderProgressbarHP: renderProgressbarHP,
};

$btn.addEventListener("click", function () {
  console.log("kick");
  character.changeHP(random(20));
  enemy.changeHP(random(20));
});

function init() {
  console.log("Start Game!");
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHpLife();
  this.renderProgressbarHP();
}

function renderHpLife() {
  const { damageHP, defaultHP, elHP } = this;
  elHP.innerText = damageHP + " / " + defaultHP;
}

function renderProgressbarHP() {
  const { elProgressbar, damageHP } = this;
  elProgressbar.style.width = damageHP + "%";
}

function changeHP(count) {
  this.damageHP -= count;

  const log = this === enemy ? generateLog(this, character, count, this.damageHP) : generateLog(this, enemy, count, this.damageHP);
  console.log(log);

  const $p =document.createElement('p');
  $p.innerText = log;
  $logs.insertBefore($p, $logs.children[0]);


  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert("Бедный " + this.name + " проиграл бой");
    $btn.disabled = true;
  }

  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, count, damageHP) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${count}, [${damageHP}/100]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${count}, [${damageHP} / 100]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${damageHP}/100]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${count}, [${damageHP} / 100]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника. -${count}, [${damageHP}/100]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${count}, [${damageHP} / 100]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${count}, [${damageHP} / 100]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. -${count}, [${damageHP}/100]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${count}, [${damageHP}/100]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${count}, [${damageHP}/100]`,
  ];

  return logs[random(logs.length) - 1];
}


init();
