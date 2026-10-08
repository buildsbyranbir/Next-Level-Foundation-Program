// ======================================================
// Full Stack Web Developer er jonno important topics
// ======================================================


// ======================================================
// 1. VARIABLE
// ======================================================

// let diye variable declare kora hoy
// let er value pore change kora jay

let name = "Rahim";
name = "Karim";

console.log(name); // Karim


// const diye variable declare korle
// pore oi variable er value change kora jay na

const age = 21;

console.log(age); // 21


// ======================================================
// 2. DATA TYPES
// ======================================================

// JavaScript er common data types:
//
// String  -> text
// Number  -> number
// Boolean -> true / false
// Undefined
// Null
// Object
// BigInt
// Symbol

let userName = "Shafayat"; // String
let userAge = 21;          // Number
let isAdult = true;        // Boolean

console.log(typeof userName); // string
console.log(typeof userAge);  // number
console.log(typeof isAdult);  // boolean


// null er typeof technically "object"
// eta JavaScript er ekta historical behavior

console.log(typeof null); // object


// ======================================================
// 3. FALSY VALUES
// ======================================================

// JavaScript e kichu value condition er moddhe false hisebe kaj kore
//
// false
// 0
// ""
// null
// undefined
// NaN

let userAge2 = 0;

if (userAge2) {
    console.log("Age exists");
} else {
    console.log("Kicchu nai");
}


// ======================================================
// 4. SCOPE
// ======================================================

// Scope mane holo kon jayga theke kon variable access kora jabe


// Block Scope
// let and const block scoped

{
    let blockAge = 21;
    console.log(blockAge);
}

// block er baire blockAge access kora jabe na


// Function Scope

function sayAge() {

    let functionAge = 21;

    console.log(functionAge);
}

sayAge();


// ======================================================
// 5. STRING
// ======================================================

let firstName = "Shafayat";
let lastName = "Islam";


// String concatenate

let fullName1 = firstName + " " + lastName;

console.log(fullName1);


// Template Literal
// Backtick (` `) use kore string er moddhe variable use kora jay

let fullName2 = `${firstName} ${lastName}`;

console.log(fullName2);


// \n diye new line create kora jay

let address = `${firstName} ${lastName}\nNaogaon`;

console.log(address);


// String er moddhe quotation use kora

let randomStr = 'I am a "student"';

console.log(randomStr);


// ======================================================
// 6. IMPORTANT STRING METHODS
// ======================================================

let city = "rajshahi";


// Uppercase

console.log(city.toUpperCase());


// Lowercase

console.log(city.toLowerCase());


// includes()
// kono word/string ache kina check kore

console.log(randomStr.includes("student")); // true


// length
// string e koyta character ache

console.log(randomStr.length);


// ======================================================
// 7. ARITHMETIC OPERATORS
// ======================================================

// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// %  Remainder / Modulus
// ** Exponent

const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000


// Complex calculation

const result = a + b - (5 + 2) * 3 / 2;

console.log(result);


// ======================================================
// 8. ASSIGNMENT OPERATORS
// ======================================================

// =
// +=
// -=
// *=
// /=
// %=

let total = 10;

total += 5; // total = total + 5
console.log(total);

total -= 2; // total = total - 2
console.log(total);

total *= 2; // total = total * 2
console.log(total);

total /= 2; // total = total / 2
console.log(total);


// ======================================================
// 9. COMPARISON OPERATORS
// ======================================================

// ==   -> value compare kore
// ===  -> value + type compare kore
// !=   -> not equal
// !==  -> value/type different
// >    -> greater than
// <    -> less than
// >=   -> greater than or equal
// <=   -> less than or equal


console.log(10 == "10");   // true
console.log(10 === "10");  // false

console.log(10 > 5);       // true
console.log(10 < 5);       // false

console.log(10 >= 10);     // true
console.log(5 <= 10);      // true


// Full Stack development e normally === and !==
// beshi use kora hoy karon eta type-o check kore


// ======================================================
// 10. LOGICAL OPERATORS
// ======================================================

// && -> AND
// || -> OR
// !  -> NOT


const x = 10;
const y = 3;


// AND
console.log(x > 5 && y < 5);


// OR
console.log(x > 20 || y < 5);


// NOT
console.log(!(x < y));


// ======================================================
// 11. IF ELSE
// ======================================================

let voterAge = 55;

if (voterAge >= 18) {
    console.log("Voter");
} else {
    console.log("Not a voter");
}


// ======================================================
// 12. ELSE IF
// ======================================================

let marks = 75;

if (marks >= 80) {

    console.log("A+");

} else if (marks >= 70) {

    console.log("A");

} else if (marks >= 60) {

    console.log("A-");

} else {

    console.log("Need Improvement");

}


// ======================================================
// 13. SWITCH CASE
// ======================================================

// Multiple fixed condition/value handle korar jonno
// switch use kora jay

let day = 2;

switch (day) {

    case 1:
        console.log("Saturday");
        break;

    case 2:
        console.log("Sunday");
        break;

    case 3:
        console.log("Monday");
        break;

    default:
        console.log("Invalid day");
}


// ======================================================
// 14. TERNARY OPERATOR
// ======================================================

// Syntax:
//
// condition ? true hole eta : false hole eta


let currentAge = 20;

currentAge >= 18
    ? console.log("Voter")
    : console.log("Not Voter");


// ======================================================
// 15. FUNCTION
// ======================================================

// Function holo reusable code block
// Ekbar function likhe multiple bar use kora jay

function sayHello(name) {

    console.log(`Hello ${name}`);

}

sayHello("Shafayat");
sayHello("Rahim");


// ======================================================
// 16. FUNCTION PARAMETER
// ======================================================

function addNumbers(a, b) {

    return a + b;

}

console.log(addNumbers(5, 10));


// ======================================================
// 17. RETURN
// ======================================================

// return function theke result ba value baire pathay

function multiply(a, b) {

    return a * b;

}

const multiplicationResult = multiply(5, 4);

console.log(multiplicationResult);


// ======================================================
// 18. DEFAULT PARAMETER
// ======================================================

// Argument na dile default value use hobe

function total(price, quantity = 12) {

    const grandTotal = price * quantity;

    return grandTotal;
}

console.log(total(10));

console.log(total(10, 5));


// ======================================================
// 19. ARROW FUNCTION
// ======================================================

// Arrow function holo function lekhar short syntax

const addArrow = (a, b) => {

    return a + b;

};

console.log(addArrow(5, 10));


// One-line arrow function
// Ek line hole {} ebong return na dileo hoy

const add = (a, b) => a + b;

console.log(add(5, 10));


// ======================================================
// 20. NODE.JS TERMINAL INPUT
// ======================================================

// Node.js e terminal theke argument nite
// process.argv use kora hoy
//
// Example:
//
// node index.js 70 1.75
//
// process.argv[2] = 70
// process.argv[3] = 1.75


const weightInput = process.argv[2];
const heightInput = process.argv[3];


// Terminal theke asha value normally string hoy
// Tai calculation er age Number() use kora better

const weight = Number(weightInput);
const height = Number(heightInput);


// ======================================================
// 21. BMI CALCULATION FUNCTION
// ======================================================

function calculateBmi(weight, height) {

    const bmi = weight / (height * height);

    return bmi;

}

const bmi = calculateBmi(weight, height);

console.log("BMI:", bmi);


// ======================================================
// 22. BMI CATEGORY
// ======================================================

// WHO BMI classification:
//
// BMI < 18.5       -> Underweight
// BMI 18.5 - 24.9  -> Normal / Healthy range
// BMI 25 - 29.9     -> Overweight
// BMI >= 30         -> Obesity
//
// Eta general educational classification.
// Real health assessment er jonno doctor/health professional
// er advice important.


if (bmi < 18.5) {

    console.log("Underweight");

} else if (bmi < 25) {

    console.log("Normal range");

} else if (bmi < 30) {

    console.log("Overweight");

} else {

    console.log("Obesity");

}


// ======================================================
// 23. COMPLETE BMI PROGRAM
// ======================================================

// Terminal:
// node index.js 60 1.70

const inputWeight = Number(process.argv[2]);
const inputHeight = Number(process.argv[3]);


function calculateBMI(weight, height) {

    return weight / (height * height);

}


const calculatedBMI = calculateBMI(inputWeight, inputHeight);

console.log("Your BMI:", calculatedBMI.toFixed(2));


if (calculatedBMI < 18.5) {

    console.log("Category: Underweight");

} else if (calculatedBMI < 25) {

    console.log("Category: Normal range");

} else if (calculatedBMI < 30) {

    console.log("Category: Overweight");

} else {

    console.log("Category: Obesity");

}


// ======================================================
// IMPORTANT SUMMARY
// ======================================================
//
// 1. let / const
// 2. Data Types
// 3. typeof
// 4. Truthy / Falsy
// 5. Scope
// 6. String
// 7. Template Literal
// 8. String Methods
// 9. Arithmetic Operators
// 10. Assignment Operators
// 11. Comparison Operators
// 12. Logical Operators
// 13. if / else
// 14. else if
// 15. switch case
// 16. Ternary Operator
// 17. Function
// 18. Parameter
// 19. Return
// 20. Default Parameter
// 21. Arrow Function
// 22. process.argv
// 23. Function diye calculation
// 24. Condition diye result/category ber kora
//
// Ei basic gula JavaScript er foundation.
// React + Node.js + Express + MongoDB shikhar age
// egulo bhalo vabe practice kora important.
// ======================================================