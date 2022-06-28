/* const array = [1, 2, 5, 60, 3, 8, 9, -9, 6, -3, 24, 52, 86, -86, 14];
function minandmax(num) {
  let maxNum = num[0];
  let minNum = num[0];
  for (let i = 0; i < num.length; i++) {
    if (maxNum < num[i]) {
      maxNum = num[i];
    }
    if (minNum > num[i]) {
      minNum = num[i];
    }
  }
  return maxNum - minNum;
}
console.log(minandmax(array));
 */
// const string = "Hello I am Asadullah Ahmed";
// function charCount(str) {
//   const charCount2 = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (str[i] === " ") continue;
//     if (!charCount2[char]) {
//       charCount2[char] = 1;
//     } else {
//       charCount2[char] += 1;
//     }
//   }
//   return charCount2;
// }
// console.log(charCount(string));
/* const names = [
  "Ayman",
  "Abu Rayhan",
  "Anik",
  "Elias Emon",
  "Engr. Sabbir",
  "Fahim Faisal",
  "Feroz Khan",
  "Habib",
  "HM Azizul",
  "Hridoy Saha",
  "Jahid Hassan",
  "Johir",
  "Md Al-Amin",
  "Md Arafatul",
  "Md Ashraful",
  "Parvez",
];
function groupName(names) {
  let obj = {};
  for (let i = 0; i < names.length; i++) {
    let firstName = names[i][0];
    if (!obj[firstName]) {
      obj[firstName] = [names[i]];
    } else {
      obj[firstName].push(names[i]);
    }
  }
  return obj;
}
console.log(groupName(names)); */
const arr = [2, 3, 4];
const arr2 = [4, 16, 9];
// function corsponding(array1, array2) {
//   if (array1.length !== array2.length) return false;
//   for (let i = 0; i < array1.length; i++) {
//     let currentIndex = array2.indexOf(array1[i] ** 2);
//     if (currentIndex === -1) {
//       return false;
//     }
//     array2.splice(currentIndex, 1);
//   }

//   return true;
// }
// console.log(corsponding(arr, arr2));
/* function same(array1, array2) {
  if (array1.length !== array2.length) return false;
  let seq1 = {};
  let seq2 = {};
  for (let val of array1) {
    seq1[val] = seq1[val] + 1 || 1;
  }

  for (let val of array2) {
    seq2[val] = seq2[val] + 1 || 1;
  }

  for (let key in seq1) {
    if (!(key ** 2) in seq2) {
      return false;
    }

    if (seq2[key ** 2] !== seq1[key]) {
      
      return false;
    }
  }
  return true;
}
console.log(same(arr, arr2)); */
// recusion function in javascript

/* function count(n) {
  console.log(n);
  n--;
  if (n > 0) {
    count(n);
  }
  return n;
}
count(10); */
/* const input = new Array(900).fill(1);
function sumofArray(arr) {
  if (arr.length === 0) return 0;
  let rest = arr.slice(1);
  return arr[0] + sumofArray(rest);
}
console.time("start");
console.log(sumofArray(input)); // 4.25 ms
console.timeEnd("start");
//////////////////////
function sumArray(arr) {
  return helper(arr, 0);
}

function helper(arr, index) {
  if (arr.length === index) return 0;
  return arr[index] + helper(arr, index + 1);
}
console.time("env");
console.log(sumArray(input));
console.timeEnd("env"); */
const str = "      Hellow world asadullah      ";
function lastLength(string) {
  const strArray = string.trim().split(" ");
  return strArray[strArray.length - 1].length;
}
console.log(lastLength(str));
