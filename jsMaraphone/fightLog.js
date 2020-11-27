import { random } from './utils.js';

function generateLog(character, enemy, count, damageHP) {
  const logs = [
    `${character.name} вспомнил что-то важное, но неожиданно ${enemy.name}, не помня себя от испуга, ударил в предплечье врага. -${count}, [${damageHP}/100]`,
    `${character.name} поперхнулся, и за это ${enemy.name} с испугу приложил прямой удар коленом в лоб врага. -${count}, [${damageHP} / 100]`,
    `${character.name} забылся, но в это время наглый ${enemy.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${damageHP}/100]`,
    `${character.name} пришел в себя, но неожиданно ${enemy.name} случайно нанес мощнейший удар. -${count}, [${damageHP} / 100]`,
    `${character.name} поперхнулся, но в это время ${enemy.name} нехотя раздробил кулаком <вырезанно цензурой> противника. -${count}, [${damageHP}/100]`,
    `${character.name} удивился, а ${enemy.name} пошатнувшись влепил подлый удар. -${count}, [${damageHP} / 100]`,
    `${character.name} высморкался, но неожиданно ${enemy.name} провел дробящий удар. -${count}, [${damageHP} / 100]`,
    `${character.name} пошатнулся, и внезапно наглый ${enemy.name} беспричинно ударил в ногу противника. -${count}, [${damageHP}/100]`,
    `${character.name} расстроился, как вдруг, неожиданно ${enemy.name} случайно влепил стопой в живот соперника. -${count}, [${damageHP}/100]`,
    `${character.name} пытался что-то сказать, но вдруг, неожиданно ${enemy.name} со скуки, разбил бровь сопернику. -${count}, [${damageHP}/100]`,
  ];

  return logs[random(logs.length) - 1];
};

export default generateLog;


