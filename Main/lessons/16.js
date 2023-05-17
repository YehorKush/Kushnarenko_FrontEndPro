// JSON, копирование объектов

// JSON имеет два метода.
// stringify - переводит объект в json.
// parse - противоположный, json переводит в объект

// Рекурсивное создание глубокой копии

function deepCopy(obj) {
  if (Array.isArray(obj)) {
    // return obj.map((elem)=> deepCopy(elem))
    return obj.map(deepCopy)
  } else {
    return obj;
  }
}

let arr = [1, 3, [4, 5]];
let copiedArr = deepCopy(arr);

copiedArr[2][0] = 5;

console.log(arr);
console.log(copiedArr);
