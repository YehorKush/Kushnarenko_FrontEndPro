// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної
// з них можна отримати 25 балів:

// Дано масив з елементами різних типів. Створити функцію яка вираховує ✅
// середнє арифметичне лише числових елементів даного масиву.

let arr = [2, 5, "tacos", 9, "burrito", "amigo", 4, 10, "sombrero"];

function f(arr) {
  let average = 0;
  counter = 0;
  for (let elem of arr) {
    if (typeof elem === "number" && !isNaN(elem)) {
      average += elem;
      counter++;
    }
  }
  console.log(
    `Середнє арифметичне лише числових елементів: ${average / counter}`
  );
}

f(arr);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x ✅
// і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва
// числа і знак виходять від користувача.

function doMath(x, znak, y) {
  switch (znak) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y);
      break;
    case "/":
      console.log(x / y);
      break;
    case "%":
      console.log(x % y);
      break;
    case "^":
      console.log(Math.pow(x, y));
      break;
  }
}

let x = +prompt("Введіть перше число", 10);
let znak = prompt("Введіть дію (+, -, *, /, %, ^)", "^");
let y = +prompt("Введіть друге число", 5);
doMath(x, znak, y);

// Написати функцію заповнення даними користувача двомірного масиву. ✅
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

function makeArr(a, b) {
  let arr = [];
  for (let x = 0; x < a; x++) {
    arr.push([]);
    for (let y = 0; y < b; y++) {
      arr[x].push(prompt(`Введіть елемент з iндексом [${x + 1}][${y}]`));
    }
  }
  console.log(arr);
}

let a = +prompt("Введіть висоту масиву", 4);
let b = +prompt("Введіть ширину масиву", 2);
makeArr(a, b);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали ✅
// другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам
// "heo wor". Вихідний рядок та символи для видалення задає користувач.

function selected(str, arr) {
  for (let i = 0; i < str.length; i++) {
    for (let elem of arr) {
      if (str[i] == elem) {
        str = str.split(elem).join("");
      }
    }
  }
  console.log(str);
}

let str = prompt("Введіть рядок", "hehehehe hahahaha");
let letter;
let arr2 = [];

do {
  letter = prompt("Який символ прибрати? (будь-яка кількість)", "h");
  if (letter != null && letter != "") {
    arr2.push(letter);
  }
} while (letter != null && letter != "");

selected(str, arr2);
