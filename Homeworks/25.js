// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має
// властивості X, Y, znak. Метод повинен підтвердити у користувача,
// чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну
// дію znak (яка описана в прототипі), інакше - запитати введення нових
// даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak
// => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі
// математичні дії.

class SuperMath {
  input() {
    if (confirm("Ввести новi даннi?")) {
      let x = prompt("Введiть новий X", 4);
      let y = prompt("Введiть новий Y", 2);
      let znak = prompt("Введiть новий X", "/");
      return { x: x, y: y, znak: znak };
    } else return 0;
  }
}

let math = new SuperMath();

math.check = function (obj) {
  if (confirm(`Зробити дію '${obj.znak}' з числами ${obj.x} і ${obj.y}?`)) {
    switch (obj.znak) {
      case "+":
        console.log(obj.x + obj.y);
        break;
      case "-":
        console.log(obj.x - obj.y);
        break;
      case "/":
        console.log(obj.x / obj.y);
        break;
      case "*":
        console.log(obj.x * obj.y);
        break;
      case "%":
        console.log(obj.x % obj.y);
        break;
    }
  } else {
    let newObj = math.input();
    newObj == 0 ? console.log("Вiдмова") : math.check(newObj);
  }
};

let first = { x: 12, y: 3, znak: "/" }; 

math.check(first);