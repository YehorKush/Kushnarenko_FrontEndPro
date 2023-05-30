// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук
// поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено
// пост, то вивести на сторінку блок з постом і зробити кнопку для
// отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

let id = 100;


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(post => {
    console.log(post);
  })
  .catch(error => {
    console.log(error);
  });
