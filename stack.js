/* const number = [1, 5, 8, 63, 87]

let sum = 0
number.forEach(function (v,i) {
    if (i % 2 !== 0) {
        // console.log( % 2 ===0);
        sum+=v
    }
})
console.log(sum); */

// let count  = 0
// for (let i = 0;   i <arr.length; i++){
//     for (let j = i; j < arr.length - 1; j++){
//         if (!arr[j] || typeof arr[j] !== 'number') {
//             arr[j] = arr[j + 1]
//             arr[j +1] = undefined
//         }
//     }
//     if (arr[i] === undefined) {
//         count ++
//     }

// }
// arr.length -=count
// console.log(arr);

// const filteredArray = arr.filter(function (v,i) {
//     return typeof v === 'number'
// })
// console.log(filteredArray);

// let newArr = []
// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] === 'number') {
//      newArr.push(arr[i])
//  }
// }
// console.log(newArr);

// ********============**********

/* const array = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
  { id: 6, value: 60 },
]; */
/* ******* update value ***** */
// const a = array.findIndex(function (v) {
//     return v.id ===5
// })
// array[a].value = 1000
// const arrFind = array.find(function (v) {
//     return v.id === 2
// })
// arrFind.value = arrFind.value * 2
// console.log(array);

/* **** delet item *********/

// const index = array.findIndex((item) => item.id === 4)
// const array1 = array.splice(index, 1)
// console.log(array);

// const array2 = array.filter((item) => item.id !== 2);
// console.log(array2);
