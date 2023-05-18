// Библиотеки, фреймворки, ошибки

// Библиотека это набор функций которые можно использовать в проекте,
// они не задают структуру проекта, а решают отдельные задачи. Они могут
// быть маленькими и конкретными, узкопрофильными.

// Фреймворк - набор библиотек и инструментов уже с собственной структурой
// и организацией проекта. Использование модулей, структура папок относится
// к фреймворкам. Обычно они большие и сложные.

// Пример библиотеки - jQuery. Она упрощает способ работы с DOM
// Другой пример - Lodash. Имеет кучу функций для работы с массивами и
// другими типами данных. Например можно удалять элементы из масива

// React js - это БИБЛИОТЕКА. Angular - ФРЕЙМВОРК

// Error

// throw new Error('Ты бомж');

// 19.js:19 Uncaught Error: Ты бомж
// at 19.js:19:7

// В случае ошибки программа останавливает выполнение
// Здесь можно использовать try catch

function divide(a, b) {
  if (b === 0) {
    throw new Error("Ты бомж");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log(err);
}

// Трай кетч проверяет код внутри try{} на наличие ошибки и в случае
// ее наличия, выполнится код из catch, а параметром в скобках передастся
// ошибка из try. Тогда программа продолжит выполнение

// Таким образом мы обработали ошибку и программа продолжила выполнение

console.log(5);

// Так же есть блок finally{} который отработает в любом случае

try {
  throw new Error("Ты чмо");
} catch (err) {
  console.log(err);
} finally {
  console.log("Блок finally");
}

// Error: Ты чмо
// at 19.js:51:9
// Блок finally

