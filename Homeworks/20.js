// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та
// додавати до масиву жителів.

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира,
// перевіряти, чи не буде кількість перевищувати максимальну кількість
// квартир, і якщо це так, додати квартиру, в іншому випадку виводить у
// консоль відповідне повідомлення.

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Room {
  people = [];
  
  add(Obj) {
    this.people.push(Obj);
    return this;
  }
}

class Building {
  constructor(limit) {
    this.array = [];
    this.limit = limit;
    this.counter = 1;
  }
  add(Obj) {
    if (this.counter <= this.limit) {
      this.array.push(Obj);
      this.counter++;
    } else {
      console.log("Квартир бiльше нема");
    }
    return this;
  }
}

let yehor = new Human("Yehor", "Male");
let zlata = new Human("Zlata", "Female");
let andriy = new Human("Andriy", "Male");
let solomia = new Human("Solomia", "Female");

let room1 = new Room();
let room2 = new Room();
let room3 = new Room();

room1.add(yehor).add(zlata).add(solomia);
room3.add(andriy);

console.log(room1.people); // (3) [Human, Human, Human]

let building = new Building(2);

building.add(room1);
building.add(room2);
building.add(room3); // Квартир бiльше нема

console.log(building.array); // (2) [Room, Room]
