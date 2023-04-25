// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами
// (Наприклад "2 + 3 = 5").

let action;

do {
  action = prompt("Що зробити? add/ sub/ mult /div", "add");
} while (
  action != "add" &&
  action != "sub" &&
  action != "mult" &&
  action != "div"
);

let a = +prompt("Введіть перше число", 4);
let b = +prompt("Введіть перше число", 2);

switch (action) {
  case "add":
    console.log(`${a} + ${b} = ${a + b}`);
    break;
  case "sub":
    console.log(`${a} - ${b} = ${a - b}`);
    break;
  case "mult":
    console.log(`${a} * ${b} = ${a * b}`);
    break;
  case "div":
    console.log(`${a} / ${b} = ${a / b}`);
    break;
}
