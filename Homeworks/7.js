// Переписати код нижче з використанням конструкції switch…case

let numOrStr = prompt("input number or string");
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

if (true == isNaN(+numOrStr)) {
  numOrStr = 1;
}

switch (numOrStr) {
  case null:
    console.log("Ви скасували");
    break;

  case "":
    console.log("Empty String");
    break;

  case 1:
    console.log("number is Ba_NaN");
    break;

  default:
    console.log("OK!");
    break;
}
