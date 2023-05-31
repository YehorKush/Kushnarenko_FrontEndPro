// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук
// поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено
// пост, то вивести на сторінку блок з постом і зробити кнопку для
// отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

let url;

function validateId() {
  const input = document.getElementById("idInput");
  const id = input.value;

  if (id < 1 || id > 100) {
    validationMessage.textContent = "Введить число від 1 до 100.";
  } else {
    validationMessage.textContent = "Значення збережено";
  }
  url = "https://jsonplaceholder.typicode.com/todos/" + id;
}

if (url == undefined) url = "https://jsonplaceholder.typicode.com/todos/100";

if (url) {
}
setTimeout(() => {
  function delay(ms) {
    return new Promise((r) =>
      setTimeout(() => {
        r();
      }, ms)
    );
  }

  function fetchToDos() {
    console.log("Search...");
    return delay(500)
      .then(() => fetch(url))
      .then((response) => response.json());
  }

  fetchToDos()
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      console.log("End");
    });
}, 5000);
