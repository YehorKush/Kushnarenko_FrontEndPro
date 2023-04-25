// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:

// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).

// Можна додати добавки:

// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом
// (+ 20 тугриків, +5 калорій).

// Напишіть програму, яка розраховує вартість та калорійність гамбургера.
// Використовуйте ООП підхід.

// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій
// та розрахунку потрібних величин)

// Приклад роботи коду:

// маленький гамбургер з начинкою з сиру
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());

// скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.price = 0;
    this.calories = 0;
  }

  addTopping(topping) {
    if (topping == "Mayo") {
      this.price += 20;
      this.calories += 5;
    } else if (topping == "Sause") {
      this.price += 15;
    }
  }

  calculate() {
    switch (this.size) {
      case "Small":
        this.calories += 50;
        break;
      case "Big":
        this.calories += 100;
        break;
    }
    switch (this.topping) {
      case "Cheese":
        this.calories += 10;
        break;
      case "Salad":
        this.calories += 20;
        break;
      case "Potato":
        this.calories += 15;
        break;
    }
    return this.calories;
  }

  calculatePrice() {
    switch (this.size) {
      case "Small":
        this.price += 20;
        break;
      case "Big":
        this.price += 40;
        break;
    }
    switch (this.topping) {
      case "Cheese":
        this.price += 20;
        break;
      case "Salad":
        this.price += 5;
        break;
      case "Potato":
        this.price += 10;
        break;
    }
    return this.price;
  }
}

let hamburger = new Hamburger("Small", "Cheese");

hamburger.addTopping("Mayo");

console.log("Calories: " + hamburger.calculate());
console.log("Price: " + hamburger.calculatePrice() + " tugrikiv");

hamburger.addTopping("Sause");

console.log("Price: " + hamburger.calculatePrice() + " tugrikiv");
