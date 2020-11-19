const $btn = document.getElementById("btn-kick");
const $btnIntervention = document.getElementById("btn-intervention");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
};

$btn.addEventListener("click", function () {
  console.log("kick");
  changeHP(random(20), character);
  changeHP(random(20), enemy);
  renderLog();
});

function init() {
  console.log("Start Game!");
  renderHP(character);
  renderHP(enemy);
  renderLog(); 
}

function renderLog() {
  const $character = document.getElementById("health-character");
  console.log($character);

  const $enemy = document.getElementById("health-enemy");
  console.log($enemy);
}

function renderHP(person) {
  renderHpLife(person);
  renderProgressbarHP(person);
}

function renderHpLife(person) {
  person.elHP.innerText = person.damageHP + " / " + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + "%";
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert("Бедный " + person.name + " проиграл бой");
    $btn.disabled = true;
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function divineChangeHP(count, person) {
  if (person.damageHP + count >= 100) {
    person.damageHP -= count * 10;
  }
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert("Бедный " + person.name + " проиграл бой");
    $btn.disabled = true;
  } else {
    person.damageHP += count;
  }

  $btnIntervention.disabled = true;

  renderHP(person);
}

$btnIntervention.addEventListener("click", function () {
  console.log("Divine Intervention!");
  divineChangeHP(random(20), character);
  divineChangeHP(random(20), enemy);
  renderLog();
});

init();
