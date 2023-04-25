let a = { value: 18 };

let b = {
  age: a,
};

let c = a;

console.log(a === b.age); // true
console.log(a === c); // true
console.log(b.age === b.age); // true

b.age = 23;

console.log(a.value === 23); // false

b.age.value = 23;

console.log(a.value === 23);

// Объекты все разные:
console.log({} != {}); // true
// На них разная ссылка

// .__proto__
// Есть абсолютно у всех объектов, то есть у всего в js

let man = {};
console.log(man.__proto__);

let users = [];
console.log(users.__proto__);

let age = 18;
console.log(age.__proto__);

let string = "яууу";
console.log(string.__proto__);

let name = "Mike";
let name2 = new String("John");

// prototype есть только в классах и функциях

let loh = {};
console.log(loh.__proto__ === Object.prototype); // true

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("John", 20);

let prototypeObj = Object.getPrototypeOf(person);
console.log("Prototype: ", prototypeObj);

console.log({}.prototype === {}.__proto__); // false
