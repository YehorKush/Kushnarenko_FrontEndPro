// Частина №1

// Створити скрипт який повинен виконувати наступне:

// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.

// При натисканні на ОК показуємо вікно, де має бути відображена наступна
// інформація:

// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому
// повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо
// країну, столицею якої є місто. Інакше показуємо йому “ти живеш у
// місті…”, де місце точок – введене місто.

let age = +prompt("Ваш рік народження:", 20);
let city = prompt("Ваше місто:", "Лондон");
let sport = prompt("Ваш улюблений вид спорту:", "Бадмінтон");

let sentence;

city == "Київ"
  ? (sentence = "Ти живеш у столиці України")
  : city == "Лондон"
  ? (sentence = "Ти живеш у столиці Британії")
  : city == "Вашингтон"
  ? (sentence = "Ти живеш у столиці Штатів")
  : city == "" || city == null
  ? (sentence = "Шкода, що Ви не захотіли ввести своє місто(")
  : (sentence = "Ти живеш у місті " + city);

// Частина №2

// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно,
// якщо користувач вкаже один із цих видів спорту, то показуємо йому
// повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я
// та прізвище чемпіона.

// Все це має бути відображено в одному вікні (алерті).

// Якщо в якомусь випадку він не захоче вводити інформацію і натисне
// Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли
// ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату
// народження, місто чи вид спорту .

let sport1 = "Бадмінтон";
let sport2 = "Футбол";
let sport3 = "Велоспорт";

let champion1 = "Дмитро Завадський";
let champion2 = "Кейран Тріпп`єр";
let champion3 = "Гарі Фішер";

let sentence2;

sport == "Бадмінтон"
  ? (sentence2 = `Круто! Хочеш стати як ${champion1}?`)
  : city == "Футбол"
  ? (sentence2 = `Круто! Хочеш стати як ${champion2}?`)
  : city == "Велоспорт"
  ? (sentence2 = `Круто! Хочеш стати як ${champion3}?`)
  : sport == "" || sport == null
  ? (sentence2 = "Шкода, що Ви не захотіли ввести свій улюблений спорт(")
  : (sentence2 = "Ваш улюблений спорт " + sport);

if (age == 0) {
  age = `Шкода, що Ви не захотіли ввести свій рік народження(`;
}

alert(`${age}
${sentence}
${sentence2}`);
