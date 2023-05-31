// Event loop

// console.log("Before delay");

// function delayBySeconds(sec) {
//   let start = (now = Date.now());
//   while (now - start < sec * 1000) {
//     now = Date.now();
//   }
// }

// delayBySeconds(5);

// console.log('After delay')

// Event loop - это про асинхронный код. Асинхронный код всегда делается
// после синхронного. То есть сеттаймаут или промис в начале кода будет
// ждать пока выполнится обычный консоль лог в конце кода.
// Консоль лог - обычная синхронная операция, которая выполняется первой.

console.log("1");

setTimeout(() => console.log("timeout"));

console.log("2");

Promise.resolve().then(() => console.log("promise"));

console.log("3");

// Микро - промисы а макро - сеттаймаут и сетинтервал
// У микро приоритет над макро. Сначала промис, потом сеттаймаут

// SetTimeout
// Через 1000 милисекунд myCallback не будет выполнен. Он будет добавлен
// в очередь задач
// setTimeout(myCallback, 1000);
