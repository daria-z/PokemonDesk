function getRow(firstRow, secondRow, letter) {

  function countLetterInRow(letter, row) {
    let symbolCounter = 0;
    for (let i=0; i<=row.length; i++) {
      if (row.charAt(i) === letter) {
        symbolCounter++
      };
    };

    return symbolCounter;
  }

  const firstRowSymbolsCount = countLetterInRow(letter, firstRow);

  const secondRowSymbolsCount = countLetterInRow(letter, secondRow);

  if (firstRowSymbolsCount > secondRowSymbolsCount) {
    return firstRow;
  } else {
    return secondRow;
  }
}


let letter = prompt('какую букву ищем?', 'а');

let firstRow = prompt('первая строка:', 'мама мыла раму');
let secondRow = prompt('вторая строка:', 'собака друг человека');

alert(`Победила строка: ${getRow(firstRow, secondRow, letter)}`); // мама мыла раму

