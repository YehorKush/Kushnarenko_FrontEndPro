// Реалізуйте функцію removeElement(array, item), щоб видалити елемент
// item з масиву array.

function removeElement(array, item) {
  let arrX = [];
  let iX = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] != item) {
      arrX[iX] = array[i];
      iX++;
    }
  }
  array = arrX;
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array); // [1, 2, 3, 4, 5, 6, 7]
console.log(removeElement(array, 5)); // [1, 2, 3, 4, 6, 7]
