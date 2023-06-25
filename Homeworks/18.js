// Написати функцію, яка приймає 1 параметр. з тим, що передали перший
// раз і т. д. Все це із замиканнями, наприклад:

function global() {
  let sum = 0;

  return function closure(a) {
    sum += a;
    console.log(sum);
  };
}

const func = global();
const funk2 = global();

console.log(typeof global());
func(10);
func(5);
func(0);
func(20);

funk2(10);
funk2(5);
funk2(0);
funk2(20);

function global2() {
  let chaine = "";
  return (c) => {
    chaine += c;
    console.log(chaine);
  };
}

let chaine = global2();

chaine("h");
chaine("e");
chaine("l");
chaine("l");
chaine("o");

// let sum = global();

// sum(3); // 3
// sum(5); // 8
// sum(20); // 20
// sum(0); // 20
// sum(100); // 128
