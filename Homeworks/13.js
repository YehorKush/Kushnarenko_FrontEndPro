// Реалізуйте функцію generateKey(length, characters), яка повертає рядок
// випадкових символів із набору characters довжиною length.
// Наприклад:

function generateKey(length, characters) {
  let key = "";
  for (let i = 0; i < length; i++) {
    key += characters[Math.floor(Math.random() * characters.length)];
  }
  return key;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key);

// 2hfwq7i2f5pybn2j
// hp1ge5fqtz7a26nj
// jhvprm2h4gvy2r99
// 7epezqitpxcfivjh
