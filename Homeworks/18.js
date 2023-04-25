// Написати функцію, яка приймає 1 параметр. з тим, що передали перший
// раз і т. д. Все це із замиканнями, наприклад:

function global() {
  let sum = 0;
  return function closure(a) {
    sum += a;
    console.log(sum);
  };
}

let sum = global();

sum(3); // 3
sum(5); // 8
sum(20); // 20
sum(0); // 20
sum(100); // 128
