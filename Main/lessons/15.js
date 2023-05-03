// Объекты, изменения свойств, создание объектов, запрет изменения свойств

// Литеральный:

let person = {
  name: "John",
  age: 30,
};

// При помощи конструктора

function Person2(name, age) {
  this.name = name;
  this.age = age;
}

let person2 = new Person2("Paul, 35");

// При помощи класса (только после ES6)

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person3 = new Person3("Ringo", 40);

// при помощи Object.create
// передаем то что является прототипом

let person4 = Object.create(null);
ы
// Дескриптор

let girl = {
  name: "Alice",
  surname: "Johnson",
};

let nameDescriptor = Object.getOwnPropertyDescriptor(girl, "name");

console.log(nameDescriptor); // свойства свойства

// 

