const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit2 = ["1", "2", "3"];

fruits.pop(); // The pop() method removes the last element from an array:
fruits.shift(); // The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruits.unshift("Lemon"); // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.at(2); // The at() method returns an indexed element from an array
fruits.toString(); //The toString() method returns an array as a comma separated string:

fruits.length; //The length property returns the length of an array
let con = fruits.concat(fruit2);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const newArr = myArr.flat();

console.log(fruits);
