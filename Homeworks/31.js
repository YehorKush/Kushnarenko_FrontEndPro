// Math.min.apply(Math, arr),
// Для чого ми Math.min викликаємо в контексті Math?

let arr = [5, 3, 7, 8, 9];
console.log(Math.min.apply(undefined, arr))
