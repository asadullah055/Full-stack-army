// const number = [1, 2,3,4,5,6,8]
// number.forEach(function (_, _, arr) {
//     console.log(arr);
// })
// let sum = 0
// number.forEach(function (v, i) {
//     if (i <= 3) {
//         sum += v
//     }
    
// })
// console.log(sum);
/* const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]
let count  = 0
for (let i = 0; i < arr.length; i++){
    for (let j = i; j < arr.length - 1; j++){
        if ( !arr[j] ||typeof arr[j] !== 'number') {
            arr[j] = arr[j + 1]
            arr[j+1]= undefined
        }
    }
    if (arr[i] === undefined) {
        count++
    }
}
arr.length = arr.length - count
console.log(arr); */

/* function fib(n) {

    if (n === 0 || n === 1) {
    return n
    }
    return fib(n-1) + fib(n-2)
}
console.log(fib(20)) */


const array = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50},
    {id: 6, value: 60},
]
// const obj = array.findIndex(function (value) {
//     return value.id === 5
// })
// array[obj].value = 0
// console.log(array);

// const obj = array.filter(function (item) {
//     return item.id !==4
// })
// console.log(obj);
//  const index = array.findIndex((item) => item.id === 4)
// const array1 = array.splice(index, 1)
// console.log(array1, index);
const a = '9'
const b = '3'
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
