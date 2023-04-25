// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім
// власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та
// зберігати екземпляр класу Людина у відповідному полі, якщо вік більше
// 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає
// метод виводу інформації класу Людина для виведення інформації про
// власника

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    console.log(`Iмʼя: ${this.name} Вiк:${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = false;
  }
  driver(Obj) {
    if (Obj.age > 18) {
      this.owner = Obj;
    } else {
      console.log("Автiвки тiльки для 18+");
    }
  }
  info() {
    if (this.owner) {
      console.log(
        `Автiвка: ${this.brand} ${this.model}, ${this.year} року випуску, з номером ${this.number}.\nВласник: ${this.owner.name} Вiк:${this.owner.age}`
      );
    } else {
      console.log(
        `Автiвка: ${this.brand} ${this.model}, ${this.year} року випуску, з номером ${this.number}.\nВласника немає`
      );
    }
  }
}

let yehor = new Person("Егор", 20);
let zlata = new Person("Злата", 17);
let andriy = new Person("Андрiй", 25);

let nissan = new Car("Nissan", "X-trail", 2009, "AX0813PO");
let landrover = new Car("Range Rover", "Evoque", 2016, "AA1203MO");
let kia = new Car("KIA", "Ceed", 2019, "KE2022IO");

nissan.driver(yehor);
nissan.info(); // Автiвка: Nissan X-trail, 2009 року випуску, з номером AX0813PO.
// Власник: Егор Вiк:20

landrover.driver(zlata); // Автiвки тiльки для 18+
landrover.info(); // Автiвка: Range Rover Evoque, 2016 року випуску, з номером AA1203MO.
// Власника немає

kia.driver(andriy);
kia.info(); // Автiвка: KIA Ceed, 2019 року випуску, з номером KE2022IO.
// Власник: Андрiй Вiк:25
