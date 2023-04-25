// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let arr = [];
let l = +prompt("Введiть довжину массиву: ", 8);
console.log(arr);

while (l) {
  let a = +prompt(`Введiть елемент массиву: `);
  arr.push(a);
  l--;
}
console.log(arr);

arr.sort((a, b) => a - b);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 2 && arr[i] <= 4) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);
