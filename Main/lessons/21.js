// Map Set WeakMap

let fruitMap = new Map();

fruitMap.set("apple", 10);
fruitMap.set("banana", 20);
fruitMap.set("grusha", 15);

console.log(fruitMap);

console.log(fruitMap.get("apple")); // 10

console.log(fruitMap.has("apple")); // true
console.log(fruitMap.has("tomato")); // false

console.log(fruitMap.has("grusha")); // true
console.log(fruitMap.delete("grusha"));
console.log(fruitMap.has("grusha")); // false

// Итерация:

for (let [key, value] of fruitMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Key: apple, Value: 10
// Key: banana, Value: 20

fruitMap.forEach((value, key) => {
  // Сначала value потом key
  console.log(`Key: ${key}, Value: ${value}`);
});

function countWords(sentence) {
  let words = sentence.split(" ");
  let result = new Map();

  for (let word of words) {
    if (result.has(word)) {
      result.set(word, result.get(word) + 1);
    } else {
      result.set(word, 1);
    }
  }
  return result;
}

let sentence = "Я Я Я я уебок я";
let result = countWords(sentence);
console.log(result); // {'Я' => 3, 'я' => 2, 'уебок' => 1}

// SET
// то же что и мап, но без дубликатов

let fruitSet = new Set();

fruitSet.add("apple");
fruitSet.add("banana");
fruitSet.add("grusha");
fruitSet.add("apple");

console.log(fruitSet); // {'apple', 'banana', 'grusha'}

// Итерация

fruitSet.forEach((fruit) => {
  console.log(fruit);
});

// Удалить повторяющиеся элементы из массива

let numbers = [1, 1, 2, 3, 4, 5, 5, 5];

let uniqueNumbers = [...new Set(numbers)];

console.log(new Set(numbers)); // {1, 2, 3, 4, 5} объект
console.log(uniqueNumbers); // [1, 2, 3, 4, 5] из-за ... превратился в массив

// WeakMap

let key1 = { id: 1 };
let key2 = { id: 2 };

let myWeakMap = new WeakMap();

myWeakMap.set(key1, "value 1");
myWeakMap.set(key2, "value 2");

console.log(myWeakMap.get(key1)); // value 1
