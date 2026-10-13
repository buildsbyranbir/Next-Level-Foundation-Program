let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 45 },
  { name: "Fahim", marks: 70 },
];

let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

//find
let customFruit = fruits.find((f) => f.length > 5);
// console.log(customFruit);

let findFr = fruits.includes("Mango"); // true false
// console.log(findFr);

// let studentCheck = students.some((s) => s.marks > 80);

let studentCheck = students.every((s) => s.marks > 40);
console.log(studentCheck);