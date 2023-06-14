// События

// Добавление обработчиков событий как атрибут в HTML:

// <button onClick="myFunction()">йоу</button>
// function myFunction() {
//   alert("йоу");
// }

// Добавление обработчиков событий как свойства DOM-объекта:

// <button id="myButton">йоу</button>

// let button = document.getElementById("myButton");
// button.onclick = myFunction;
// function myFunction() {
//   alert("йоу");
// }

// Использование addEventListener

// element.addEventListener(event, function, useCapture)

// Фазы события:
// 1. Event Capturing - ныряние вглубь через вложенность от document до
// button. Document->HTML->Body->Div->button
// 2. Event target - достижение цели, обработка события
// 3. Event bubbling - всплытие, от button до document

// <div id="outer">
//   <div id="inner">Click me</div>
// </div>;

// document.getElementById("outer").addEventListener(
//   "click",
//   () => {
//     console.log("Outer div");
//   },
//   true
// );

// document.getElementById("inner").addEventListener(
//   "click",
//   () => {
//     console.log("Inner div");
//   },
//   true
// );

// Делегирование событий
// Позволяет делать обработчик для кучи разных елементов

// <ul id="myList">
//   <li>Element 1</li>
//   <li>Element 2</li>
//   <li>Element 3</li>
// </ul>;

// let myList = document.getElementById("myList");

// myList.addEventListener("click", () => {
//   if (event.target.tagName === "LI") {
//     console.log("Click: ", event.target.textContent);
//   }
// });

// target
// Свойство, которое возвращает елемент что создал событие

// <button>target</button>

// document.querySelector("button").addEventListener("click", (event) => {
//   console.log(event.target);
// });

// preventDefault

// <a href="https://www.example.com"> href</a>

// document.querySelector("a").addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Prevent Default event");
// });

// stopPropagation
// stop
