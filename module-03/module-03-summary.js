// ============================================
// 1. REDUCE
// ============================================

let products = [
  { title: "Mouse", price: 500, inStock: true },
  { title: "Keyboard", price: 1200, inStock: false },
  { title: "Monitor", price: 8000, inStock: true },
  { title: "Headphone", price: 1500, inStock: true },
];

// reduce diye sob product er total price ber kora hoy
let totalPrice = products.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);

console.log("Total Price:", totalPrice);

// ============================================
// 2. SORT
// ============================================

let numbers = [10, 30, 600, 35, 900, 20];

// Ascending order: choto theke boro
let ascending = [...numbers].sort((a, b) => a - b);

// Descending order: boro theke choto
let descending = [...numbers].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);

// Object er price onujayi descending sort
let sortedProducts = [...products].sort((a, b) => {
  return b.price - a.price;
});

console.log("Sorted Products:", sortedProducts);

// ============================================
// 3. CHAINING
// ============================================

// Prothome filter diye available product ber korbo
// Tarpor reduce diye available product er total price ber korbo

let availablePrice = products
  .filter((p) => p.inStock === true)
  .reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

console.log("Available Products Price:", availablePrice);

// ============================================
// 4. FOREACH
// ============================================

let fruits = ["Apple", "Banana", "Mango", "Jackfruit"];

// forEach diye prottekta element niye kaj kora hoy
// forEach notun array return kore na

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// ============================================
// 5. MAP
// ============================================

// map diye prottekta element transform kore notun array banano hoy

let upperFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

console.log("Uppercase Fruits:", upperFruits);

// Index soho notun array banano
let numberedFruits = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit}`;
});

console.log("Numbered Fruits:", numberedFruits);

// ============================================
// 6. FILTER
// ============================================

// filter diye condition onujayi notun array banano hoy

let customFruits = fruits.filter((fruit) => {
  return fruit.length > 5;
});

console.log("Filtered Fruits:", customFruits);

// ============================================
// 7. FIND
// ============================================

// find condition match kora prothom element return kore
// Match na pele undefined return kore

let foundFruit = fruits.find((fruit) => {
  return fruit.length > 5;
});

console.log("Found Fruit:", foundFruit);

// ============================================
// 8. INCLUDES
// ============================================

// includes check kore kono value array te ache kina
// Result true othoba false hoy

let hasMango = fruits.includes("Mango");

console.log("Has Mango:", hasMango);

// ============================================
// 9. SOME
// ============================================

let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 45 },
  { name: "Fahim", marks: 70 },
];

// At least ekjon student er marks 80 er beshi kina
let hasHighMarks = students.some((student) => {
  return student.marks > 80;
});

console.log("Has High Marks:", hasHighMarks);

// ============================================
// 10. EVERY
// ============================================

// Sob student condition fulfill kore kina check kore

let allPassed = students.every((student) => {
  return student.marks >= 40;
});

console.log("All Passed:", allPassed);

// ============================================
// 11. DESTRUCTURING - OBJECT
// ============================================

const student = {
  name: "Rahim",
  age: 20,
  address: "Dhaka",
};

// Object theke property alada variable e neya
const { name, age, address } = student;

console.log(name, age, address);

// Variable er naam change kore neya
const { name: studentName } = student;

console.log("Student Name:", studentName);

// ============================================
// 12. NESTED DESTRUCTURING
// ============================================

const studentInfo = {
  name: "Fahim",
  address: {
    city: "Dhaka",
    zip: 1212,
  },
  hobbies: ["Gardening", "Painting"],
};

// Nested object theke value neya
const {
  name: infoName,
  address: { city, zip },
  hobbies: [firstHobby],
} = studentInfo;

console.log(infoName, city, zip, firstHobby);

// ============================================
// 13. ARRAY DESTRUCTURING
// ============================================

const colors = ["Red", "Green", "Black"];

// Array er element position onujayi variable e neya
const [first, second, third] = colors;

console.log(first, second, third);

// Prothom duita value skip kore tritiyo value neya
const [, , lastColor] = colors;

console.log("Last Color:", lastColor);

// ============================================
// 14. TEMPLATE LITERALS
// ============================================

let price = 500;
let quantity = 3;

// Backtick diye string er moddhe variable use kora jay
let message = `Total Price: ${price * quantity} Taka`;

console.log(message);

// Function call ebong expression use kora jay
function getDiscount(price) {
  return price * 0.1;
}

console.log(`Discount: ${getDiscount(price)} Taka`);

// ============================================
// 15. TEMPLATE LITERALS - TERNARY
// ============================================

let stock = 5;

// Condition onujayi message show kora
let status = `Status: ${
  stock > 0 ? `In Stock (${stock})` : "Out of Stock"
}`;

console.log(status);

// ============================================
// 16. REST OPERATOR
// ============================================

// Function e multiple argument ekta array te neya
function add(...numbers) {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
}

console.log("Sum:", add(1, 2, 3, 4, 5));

// Object theke kichu property bad diye baki property neya
const person = {
  name: "Tanmoy",
  age: 27,
  address: "Dhaka",
  occupation: "Developer",
};

const { name: personName, ...remainingInfo } = person;

console.log("Remaining Info:", remainingInfo);

// Array theke kichu element bad diye baki element neya
const numbers2 = [1, 2, 3, 100, 200];

const [, , ...remainingNumbers] = numbers2;

console.log("Remaining Numbers:", remainingNumbers);

// ============================================
// 17. SPREAD OPERATOR
// ============================================

// Array copy ebong notun element add kora
let cart = ["Fruits", "Rice"];

let updatedCart = [...cart, "Egg"];

console.log("Original Cart:", cart);
console.log("Updated Cart:", updatedCart);

// Duita object merge kora
const personalInfo = {
  name: "Samad",
  age: 22,
};

const contactInfo = {
  email: "samad@example.com",
  phone: "01755500000",
};

const fullProfile = {
  ...personalInfo,
  ...contactInfo,
  zip: "6000",
};

console.log("Full Profile:", fullProfile);

// ============================================
// 18. OPTIONAL CHAINING (?.)
// ============================================

let user1 = {
  name: "Rahim",
  address: {
    city: "Dhaka",
  },
};

let user2 = {
  name: "Karim",
};

// Property na thakleo error chara access kora
console.log(user1?.address?.city); // Dhaka
console.log(user2?.address?.city); // undefined

// ============================================
// 19. NULLISH COALESCING (??)
// ============================================

// Value null ba undefined hole default value use hoy
let cityName = user2?.address?.city ?? "Rajshahi";

console.log("City:", cityName);

// 0 ba empty string ke default value diye replace kore na
console.log(0 ?? 100); // 0
console.log("" ?? "Default"); // ""
console.log(null ?? "Default"); // Default

// ============================================
// 20. ES MODULES - EXPORT & IMPORT
// ============================================

// math.js file er code:
//
// export function subs(a, b) {
//   return a > b ? a - b : b - a;
// }
//
// export const pi = 3.14159;
//
// export default function add(a, b) {
//   return a + b;
// }

// main.js file e import korar niyom:
//
// import add, { subs, pi } from "./math.js";
//
// console.log(add(5, 3));
// console.log(subs(70, 9));
// console.log(pi);

// Default export er naam nijer moto deya jay
// Named export er naam normally same rakhte hoy
