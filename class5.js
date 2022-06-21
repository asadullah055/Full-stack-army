//Imperative traverse
// const numbers = [2, 5, 6, 7, 89, 100];
/* 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); */

// numbers.forEach(function (_, _, array) {
//   console.log(array);
// });

let arr = [1, 2, 3, null, false, "", 6];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length - 1; j++) {
//     if (!arr[j] || typeof arr[j] !== "number") {
//       arr[j] = arr[j + 1];
//       arr[j + 1] = undefined;
//     }
//   }
//   if (arr[i] === undefined) {
//     count++;
//   }
//   arr.length = arr.length - count;
// }
// console.log(arr);
// const filterArray = arr.filter((v) => {
//   return typeof v === "number";
// });
// console.log(filterArray);
const arr2 = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

/* const index = arr2.findIndex((v) => {
  return v.id === 3;
});
arr2[index].value = 500000;
console.log(arr2); */
// const obj = arr2.find((v) => {
//   return v.id === 4;
// });
// obj.value = 5482
// console.log(arr2);
