const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit2 = ["1", "2", "3"];

// Perform operations on fruits
fruits.pop(); // Removes "Mango"
fruits.shift(); // Removes "Banana"
fruits.unshift("Lemon"); // Adds "Lemon" at the beginning

// Concatenate fruit2 and fruits arrays
let con = fruits.concat(fruit2);

// Convert concatenated array to a string
let conString = con.toString();

// Multi-dimensional array flattening
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();

// Check the third element in fruits
let thirdFruit = fruits.at(2);

// Check the length of the fruits array
let fruitsLength = fruits.length;

console.log("Modified fruits array:", fruits);
console.log("Concatenated array as string:", conString);
console.log("Flattened array:", newArr);
console.log("Third fruit:", thirdFruit);
console.log("Length of the fruits array:", fruitsLength);
