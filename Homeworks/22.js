// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з
// оцінками, це також властивість. І є можливість отримати вік студента та
// його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25
// елементів, спочатку він не заповнений, але на 25 елементів. Це масив,
// в якому відзначається відвідуваність, щоразу коли ми викликаємо метод
// .present() на чергове порожнє місце, в масив записується true, коли
// викликаємо .absent() - записується false. Передбачте будь-який захист
// від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
// Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє
// відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка
// більше 90, а середнє відвідування більше 0.9, то метод summary
// повертає рядок "Молодець!", якщо одне з цих значень менше , то -
// "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3
// екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
  constructor(name, surname, year, grades) {
    this.name = name;
    this.surname = surname;
    this.yearOfBorn = year;
    this.grades = grades; // масив оцiнок
    this.arrOfVisiting = new Array(25); // масив вiдвiдувань
    this.lections = 0; // рахує кажну наступну вiдмiтку
    this.presentCounter = 0; // рахує кiлькiсть вiдвiдувань (true)
    this.averageBall = 0; // середнiй бал студента
    this.averagePresents = 0; // середня вiдвiдуванiсть
  }
  getAge() {
    console.log(`Вiк студента: ${new Date().getFullYear() - this.yearOfBorn}`);
  }
  present() {
    if (this.lections < 25) {
      this.arrOfVisiting[this.lections] = true;
      this.lections++; // це як лiчильник для заповнення масиву вiдвiдувань, вiн один i для true i для false
      this.presentCounter++;
    }
  }
  absent() {
    if (this.lections < 25) {
      this.arrOfVisiting[this.lections] = false;
      this.lections++;
    }
  }
  getAverageBall() {
    this.averageBall = Math.round(
      this.grades.reduce((sum, current) => sum + current, 0) /
        this.grades.length
    );
    console.log(this.averageBall);
  }
  getAveragePresents() {
    this.averagePresents = this.presentCounter / this.arrOfVisiting.length;
    console.log(this.averagePresents);
  }
  summary() {
    if (this.averagePresents > 0.9 && this.averageBall > 90) {
      console.log("Молодець!");
    } else if (this.averagePresents > 0.9 || this.averageBall > 90) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска!");
    }
  }
}

// Я зробив трьох студентiв пiд три категорiї для методу summary

let otlichnik = new Student(
  "Otlichnick",
  "Molodec",
  2000,
  [99, 95, 98, 92, 93]
);
let horoshist = new Student("Horoshist", "Norm", 2005, [75, 73, 74, 80, 65]);
let loser = new Student("Loser", "Ploho", 2003, [10, 15, 3, 19, 25, 30]);

for (let i = 0; i < 2; i++) {
  horoshist.absent();
  loser.present();
}

for (let i = 0; i < 30; i++) {
  otlichnik.present();
  horoshist.present();
  loser.absent();
}

otlichnik.getAverageBall(); // 95
horoshist.getAverageBall(); // 73
loser.getAverageBall(); // 17

otlichnik.getAveragePresents(); // 1
horoshist.getAveragePresents(); // 0.92
loser.getAveragePresents(); // 0.08

otlichnik.summary(); // Молодець!
horoshist.summary(); // Добре, але можна краще
loser.summary(); // Редиска!
