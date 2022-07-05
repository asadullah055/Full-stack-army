const alfa = String.fromCharCode(...Array(123).keys())
  .toString(36)
  .slice(65, 91)
  .split("");
function suffleJs(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.round(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
console.log(suffleJs(alfa));
