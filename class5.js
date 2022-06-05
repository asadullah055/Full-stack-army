//Imperative traverse
const numbers = [2, 5, 6, 7, 89, 100];
/* 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); */

numbers.forEach(function (_, _, array) {
  console.log(array);
});
//নিচের Array থেকে শুধু Number গুলা বের করতে হবে, কোন নতুন Array তৈরি করা যাবে না। এই সিস্টেমে করলে memory তে জায়গা কম লাগবে।
/* let arr2 = [1, 2, 3, null, false, 6];
for (let i = 0; i < arr2.length; i++) {

} */
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
