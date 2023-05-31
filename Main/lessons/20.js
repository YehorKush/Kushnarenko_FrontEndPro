// Асинхронность, промисы

// Promise - это объект, который представляет асинхронную операцию, которая
// может быть завершена результатом или ошибкой. Они идеально подходят
// для выполнения цепочки асинхронных задач.

// Промис имеет три возможных состояния:

// Ожидание (pending): Исходное состояние промиса, когда асинхронная
// операция выполняется.

// Выполнено (fulfilled): Состояние промиса, когда асинхронная операция
// успешно завершена. Промис переходит в это состояние с помощью функции
// resolve.

// Отклонено (rejected): Состояние промиса, когда асинхронная операция
// завершилась с ошибкой. Промис переходит в это состояние с помощью
// функции reject.

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ты не бомж");
//   }, 200);
// });

// console.log(p);

// setTimeout(() => {
//   console.log(p);
// }, 201);

// p.then((result) => {
//   console.log(result);
// })
//   .catch((error) => {
//     console.error("Ошибка:", error); // Обрабатываем отклонение промиса
//   })
//   .finally(() => {
//     console.log("Конец"); // Выполняем код в любом случае
//   });

// function asynkOperation(callback) {
//   setTimeout(function () {
//     callback(null, "fine");
//   }, 1000);
// }

// asynkOperation(function (error, result) {
//   if (error) {
//     console.log("Error: ", error);
//   } else {
//     console.log("Result: ", result);
//   }
// });

// // коллбек - первая версия промиса
// // Promise - объект. Конструктор принимает функцию с двумя параметрами
// // - resolve и reject

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(myPromise); // Promise {<pending>}
// }, 1900);

// // Промисы имеют три состояния:
// // pending - не закончен, в ожидании
// // resolve (fullfilled) - положительный
// // reject (rejected) - отклоненный

// // Промисы иммеют важный метод - then()
// // then() обрабатывает результат работы промиса, независимо resolve он
// // или reject

// myPromise.then((result) => {
//   console.log(result); // Success!
// });

// setTimeout(() => {
//   console.log(myPromise); // Promise {<fulfilled>: 'Success!'}
// }, 3000);

// myPromise
//   .then((result) => {
//     console.log("First result: ", result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log("Second result: ", result);
//   });

// -----------------------------------------

// let secondPromise = new Promise((resolve, reject) => {
//   //   resolve("Успіх!");
//   reject("Помилка!");
// });

// // then вообще принимает два параметра - один для обработки ответа,
// // второй для обработки ошибки.
// secondPromise
//   .then(
//     (result) => {
//       console.log(result);
//     },
//     (reason) => {
//       console.log(reason);
//     }
//   )
//   // У Promise так же есть метод catch()
//   .catch((error) => {
//     console.log("Reason: ", error);
//   });
// // И метод finally(), который сработает в любом случае

// console.log(secondPromise); // Promise {<rejected>: 'Помилка!'}

// -----------------------------------------

// let firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First Promise");
//   }, 2000);
// });

// let secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Second Promise");
//   }, 1500);
// });

// // Promise.all() принимает массив промисов и возвращает новый промис
// // когда все остальные выполнятся

// Promise.all([firstPromise, secondPromise]).then((results) => {
//   console.log("Result: ", results);
// }); // Result: ['First Promise', 'Second Promise']
// // Если в одном промисе будет reject, вернет чисто ошибку вместо массива

// // Promise.race() принимает массив промисов и возвращает первый
// // выполнившийся

// Promise.race([firstPromise, secondPromise]).then((result) => {
//   console.log("Result: ", result);
// }); // Result:  Second Promise

// // Promise.allSettled() принимает массив промисов и возвращает первый
// // выполнившийся

// Promise.allSettled([firstPromise, secondPromise]).then((result) => {
//   console.log("Result: ", result);
// }); // массив объектов с двумя значениями: статус и результат каждого
// // промиса

// -----------------------------------------

// asynk
// await

// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("In promise");
//     }, ms);
//   });
// }

// function doSomething() {
//   let result = wait(2000);
//   console.log("Result: ", result);
// }

// doSomething()

