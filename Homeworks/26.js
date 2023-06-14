// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук
// поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено
// пост, то вивести на сторінку блок з постом і зробити кнопку для
// отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

let egor = new Promise((resolve, reject) => {
  let id = 0;
  while (!id) {
    id = prompt("йоу", 15);
  }

  setTimeout(() => {
    if (id > 0 && id < 101) resolve(id);
    if (id < 0 || id > 100) reject("wrong number");
  }, 1000);
})

  .then((id) => {
    let url = "https://jsonplaceholder.typicode.com/todos/" + id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
