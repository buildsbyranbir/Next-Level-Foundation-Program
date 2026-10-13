// ============================================
// PART 1: ARRAY OPERATIONS
// ============================================
// Array er moddhe multiple value rakha jay
let names = ["Shafayat", "Mir", "Imun", "Ravi", "Mezba"];
let numbers = [100, 200, 250, 300, 600];

// Index 0 mane array er prothom element
console.log(names[0]);

// Index 4 mane numbers array er 5 number element
console.log(numbers[4]);

// push() array er sheshe notun element add kore
names.push("Rakib");
names.push("Farsit");

// pop() array er shesh element remove kore
names.pop();

// unshift() array er shurute element add kore
names.unshift("Farsit");

// shift() array er shurur element remove kore
names.shift();

// splice(startIndex, deleteCount, newElements)
// Index 2 theke 1 ta element remove kore
// Tar jaygay "Farsit" ebong "Imun" add kore
names.splice(2, 1, "Farsit", "Imun");

// Updated array console e dekhabe
console.log("Updated Names:", names);

// ============================================
// PART 2: ARRAY LOOP AND CALCULATION
// ============================================

let marks = [55, 82, 91, 45, 98, 63];

// Maximum mark ber kora
let max = marks[0];

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
}

console.log("Maximum Mark:", max);

// Total marks ber kora
let sum = 0;

for (let mark of marks) {
  sum += mark;
}

console.log("Total Marks:", sum);
console.log("Average Marks:", sum / marks.length);

// Array reverse kora
let reversedMarks = [];

for (let i = marks.length - 1; i >= 0; i--) {
  reversedMarks.push(marks[i]);
}

console.log("Reversed Marks:", reversedMarks);


// ============================================
// PART 3: FOR...OF AND FOR...IN
// ============================================

// for...of array er value access kore
let techStack = ["JS", "TS", "Node.js", "React", "PostgreSQL"];

for (let tech of techStack) {
  console.log("Learning:", tech);
}

// for...in object er key access kore
let person = {
  name: "Mr.X",
  age: 100,
  address: "Dhaka",
};

for (let key in person) {
  console.log(key, "->", person[key]);
}


// ============================================
// PART 4: BREAK AND CONTINUE
// ============================================

// break loop bondho kore
let limit = 50;

for (let i = limit; i <= 100; i++) {
  if (i > 60) {
    break;
  }

  console.log("Break Example:", i);
}

// continue current iteration skip kore
for (let i = 1; i < 15; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log("Even Number:", i);
}


// ============================================
// PART 5: WHILE LOOP
// ============================================

let fruits = ["Mango", "Jackfruit", "Apple", "Orange"];

let i = 0;

while (i < fruits.length) {
  console.log("Khabo:", fruits[i]);
  i++;
}


// ============================================
// PART 6: FUNCTION AND DRY PRINCIPLE
// ============================================

// DRY = Don't Repeat Yourself

// Price valid kina check kore
function isValidPrice(price) {
  return typeof price === "number" &&
         Number.isFinite(price) &&
         price > 0;
}

// Email validate kore
function isValidEmail(email) {
  return typeof email === "string" &&
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Discount calculate kore
function calculateDiscount(price, discountPercent) {
  if (
    !isValidPrice(price) ||
    typeof discountPercent !== "number" ||
    !Number.isFinite(discountPercent) ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    return null;
  }

  let discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}

// VAT shoho final bill calculate kore
function calculateFinalBill(price, vatPercentage = 15) {
  if (
    !isValidPrice(price) ||
    typeof vatPercentage !== "number" ||
    !Number.isFinite(vatPercentage) ||
    vatPercentage < 0
  ) {
    return null;
  }

  let vat = (price * vatPercentage) / 100;
  return price + vat;
}

// BDT format e amount show kore
function formatBDT(amount) {
  return `${amount.toFixed(2)} BDT`;
}

// String er prothom letter capital kore
function capitalize(str) {
  if (typeof str !== "string" || !str) {
    return "";
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}


// ============================================
// PART 7: ORDER PROCESSING SYSTEM
// ============================================

function processOrder(user, itemPrice, discountCode) {
  console.log(
    `--- Processing order for ${capitalize(user.name)} ---`
  );

  if (
    !user ||
    typeof user.name !== "string" ||
    !isValidEmail(user.email) ||
    !isValidPrice(itemPrice)
  ) {
    console.log("Error: Invalid user or price");
    return;
  }

  let currentPrice = itemPrice;

  // NLB code dile 20% discount apply hobe
  if (discountCode === "NLB") {
    currentPrice = calculateDiscount(itemPrice, 20);
    console.log("20% discount applied");
  }

  let totalBill = calculateFinalBill(currentPrice);

  if (totalBill === null) {
    console.log("Error: Bill calculation failed");
    return;
  }

  console.log("Original Price:", formatBDT(itemPrice));
  console.log("Price After Discount:", formatBDT(currentPrice));
  console.log("Final Amount to Pay:", formatBDT(totalBill));
  console.log("Order completed successfully");
}

let user1 = {
  name: "Shafayat",
  email: "shafayat.ph@gmail.com",
};

processOrder(user1, 2000, "NLB");


// ============================================
// PART 8: STUDENT MANAGEMENT MINI PROJECT
// ============================================

let students = [
  { id: 101, name: "Rahim", age: 20, department: "CSE" },
  { id: 102, name: "Karim", age: 22, department: "EEE" },
];

// Notun student add kore
function addStudent(name, age, dept) {
  let newId =
    students.length > 0
      ? students[students.length - 1].id + 1
      : 101;

  let newStudent = {
    id: newId,
    name: name,
    age: age,
    department: dept,
  };

  students.push(newStudent);
  console.log("Student added successfully:", newStudent);
}

// Shob student show kore
function getAllStudents() {
  for (const student of students) {
    console.log(student);
  }
}

// ID diye student khuje ber kore
function findStudent(id) {
  let foundStudent = null;

  for (let student of students) {
    if (student.id === id) {
      foundStudent = student;
      break;
    }
  }

  if (foundStudent) {
    console.log("Found Student:", foundStudent);
  } else {
    console.log("404: Student not found");
  }
}

// ID diye student delete kore
function deleteStudent(id) {
  let targetIndex = -1;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      targetIndex = i;
      break;
    }
  }

  if (targetIndex !== -1) {
    let deletedStudent = students.splice(targetIndex, 1);

    console.log(
      `Deleted Student: ${deletedStudent[0].name}, ID: ${id}`
    );
  } else {
    console.log("404: Student not found");
  }
}

addStudent("Fahim", 25, "AI");
findStudent(102);
deleteStudent(101);
getAllStudents();


// ============================================
// PART 9: NESTED OBJECT AND ARRAY
// ============================================

let user = {
  name: "Shafayat",
  age: 25,
  address: {
    city: "Rajshahi",
    area: "Upashahar",
    zipcode: 6000,
  },
};

console.log(user.address.city);
console.log(user["address"]["zipcode"]);

let entries = Object.entries(user);
console.log("Object Entries:", entries);

// Nested array er value update kore
let studentList = [
  {
    name: "Rahim",
    id: 101,
  },
  {
    name: "Fahim",
    id: 102,
  },
  {
    name: "Sahim",
    id: 103,
    address: {
      area: "Badda",
      thana: "Vatara",
      lane: "Embassy Lane",
      options: ["Victor", "Dhaka Chaka"],
    },
  },
];

studentList[2].address.options[1] = "Premium";
console.log(studentList[2].address.options[1]);


// ============================================
// PART 10: OBJECT OPERATIONS
// ============================================

let customer = {
  name: "Shafayat",
  age: 25,
  address: "Dhaka",
};

delete customer.address;

customer.address = "Rajshahi";
customer.age = 26;

customer.address = {
  city: "Rajshahi",
  area: "Upashahar",
};

console.log("Object Keys:", Object.keys(customer));
console.log("Object Values:", Object.values(customer));
console.log("Object Entries:", Object.entries(customer));


// ============================================
// PART 11: STUDENT MARKS AND AVERAGE
// ============================================

let student = {
  name: "Rahim",
  id: 102,
  marks: {
    bangla: 75,
    english: 82,
    math: 90,
  },
};

let totalMarks = 0;
let totalSubjects = 0;

// Shob subject er marks jog kore
for (const subject in student.marks) {
  totalMarks += student.marks[subject];
  totalSubjects++;
}

// Average marks calculate kore
let average = totalMarks / totalSubjects;

console.log("Student Name:", student.name);
console.log("Total Marks:", totalMarks);
console.log("Total Subjects:", totalSubjects);
console.log("Average Marks:", average.toFixed(2));

if (average >= 80) {
  console.log(
    "Passed with distinction. Got",
    average.toFixed(2),
    "%"
  );
} else {
  console.log("Aro bhalo kore porashuna korte hobe");
}


// ============================================
// PART 12: SHOPPING CART BILLING MINI PROJECT
// ============================================

let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1800, quantity: 1 },
  { name: "Socks", price: 150, quantity: 3 },
];

// Total quantity ebong bill calculate kore
function calculateCartBill(cartItems) {
  let totalQuantity = 0;
  let totalBill = 0;

  console.log("========== SHOPPING INVOICE ==========");

  for (const item of cartItems) {
    if (
      !item ||
      typeof item.name !== "string" ||
      !isValidPrice(item.price) ||
      !Number.isInteger(item.quantity) ||
      item.quantity <= 0
    ) {
      console.log("Invalid item skipped");
      continue;
    }

    // Product er price o quantity diye subtotal ber kore
    let subtotal = item.price * item.quantity;

    totalQuantity += item.quantity;
    totalBill += subtotal;

    console.log(
      `${item.name}: ${item.quantity} x ${formatBDT(item.price)} = ${formatBDT(subtotal)}`
    );
  }

  console.log("--------------------------------------");
  console.log("Total Items:", totalQuantity);
  console.log("Total Bill:", formatBDT(totalBill));
  console.log("Thank you for shopping!");
  console.log("======================================");
}

calculateCartBill(cart);