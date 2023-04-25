// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,
// 76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.✅

let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
console.log(arr);

let counter = 0;
let sum = 0;
for (let elem of arr) {
  if (elem >= 0) {
    counter++;
    sum += elem;
  }
}

console.log(`Сума позитивних елементів: ${sum} \nЇхня кiлькiсть: ${counter}`);

// Знайти мінімальний елемент масиву та його порядковий номер.✅

let min = 0;
let minid = 0;

for (let i in arr) {
  if (arr[i] < min) {
    min = arr[i];
    minid = i;
  }
}

console.log(
  `Мінімальний елемент масиву: ${min} \nЙого порядковий номер: ${minid}`
);

// Знайти максимальний елемент масиву та його порядковий номер.✅

let max = 0;
let maxid = 0;

for (let i in arr) {
  if (arr[i] > max) {
    max = arr[i];
    maxid = i;
  }
}

console.log(
  `Максимальний елемент масиву: ${max} \nЙого порядковий номер: ${maxid}`
);

// Визначити кількість негативних елементів.✅

let counter2 = 0;
for (let elem of arr) {
  if (elem < 0) {
    counter2++;
  }
}

console.log(`Кiлькiсть негативних елементiв: ${counter2}`);

// Знайти кількість непарних позитивних елементів.✅

let counter3 = 0;
for (let elem of arr) {
  if (elem > 0 && elem % 2 == 1) {
    counter3++;
  }
}

console.log(`Кiлькiсть непарних позитивних елементів: ${counter3}`);

// Знайти кількість парних позитивних елементів.✅

let counter4 = 0;
for (let elem of arr) {
  if (elem > 0 && elem % 2 == 0) {
    counter4++;
  }
}

console.log(`Кiлькiсть парних позитивних елементів: ${counter4}`);

// Знайти суму парних позитивних елементів.✅

let sum2 = 0;
for (let elem of arr) {
  if (elem > 0 && elem % 2 == 0) {
    sum2 += elem;
  }
}

console.log(`Cума парних позитивних елементів: ${sum2}`);

// Знайти суму непарних позитивних елементів.✅

let sum3 = 0;
for (let elem of arr) {
  if (elem > 0 && elem % 2 == 1) {
    sum3 += elem;
  }
}

console.log(`Cума непарних позитивних елементів: ${sum3}`);

// Знайти добуток позитивних елементів.✅

let product = 1;
for (let elem of arr) {
  if (elem > 0) {
    product *= elem;
  }
}

console.log(`Добуток позитивних елементів: ${product}`);

// Знайти найбільший серед елементів масиву, остальні обнулити.✅

let max2 = 0;
for (let i in arr) {
  if (arr[i] > max2) {
    max2 = arr[i];
  }
}

for (let i in arr) {
  if (arr[i] != max2) {
    arr[i] = 0;
  }
}

console.log(arr);
