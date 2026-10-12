
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

// Prothom mark ke maximum dhore nicchi
let max = marks[0];

// Index 1 theke array er shesh porjonto loop cholbe
for (let i = 1; i < marks.length; i++) {

  // Current mark maximum er cheye boro kina check korbe
  if (marks[i] > max) {

    // Boro hole max er moddhe notun value rakhbe
    max = marks[i];
  }
}

// Shobcheye boro mark print korbe
console.log("Maximum Mark:", max);


// Shob mark jog korar jonno initial sum 0
let sum = 0;

// for...of array er prottekta value niye kaj kore
for (let mark of marks) {

  // Prottek mark sum er sathe jog hobe
  sum += mark;
}

// Shob mark er total print korbe
console.log("Total Marks:", sum);

// Total ke mot mark er shonkha diye vag kore average ber korbe
console.log("Average Marks:", sum / marks.length);


// Reverse array rakhar jonno empty array
let reversedMarks = [];

// Last index theke shuru kore 0 porjonto loop cholbe
for (let i = marks.length - 1; i >= 0; i--) {

  // Original array er element reverse array te add hobe
  reversedMarks.push(marks[i]);
}

// Reverse kora array print korbe
console.log("Reversed Marks:", reversedMarks);


// ============================================
// PART 3: FOR...OF AND FOR...IN
// ============================================

// Array er prottekta value niye kaj korar jonno for...of
let techStack = ["JS", "TS", "Node.js", "React", "PostgreSQL"];

for (let tech of techStack) {

  // Prottek technology er naam print korbe
  console.log("Learning:", tech);
}


// Object er key niye kaj korar jonno for...in
let person = {
  name: "Mr.X",
  age: 100,
  address: "Dhaka",
};

// key variable e prottek property er naam ashbe
for (let key in person) {

  // person[key] diye oi property er value access kora hoy
  console.log(key, "->", person[key]);
}


// ============================================
// PART 4: BREAK AND CONTINUE
// ============================================

// break loop ke puro stop kore dey
let limit = 50;

// 50 theke 100 porjonto loop cholbe, jodi break na hoy
for (let i = limit; i <= 100; i++) {

  // i er value 60 er beshi hole loop bondho hobe
  if (i > 60) {
    break;
  }

  // 50 theke 60 porjonto number print korbe
  console.log("Break Example:", i);
}


// continue current iteration skip kore porer iteration e jay
for (let i = 1; i < 15; i++) {

  // Number odd hole current iteration skip korbe
  if (i % 2 !== 0) {
    continue;
  }

  // Shudhu even number print korbe
  console.log("Even Number:", i);
}


// ============================================
// PART 5: WHILE LOOP
// ============================================

// Fruit er array
let fruits = ["Mango", "Jackfruit", "Apple", "Orange"];

// Loop er starting index 0
let i = 0;

// i array er length er cheye choto thaka porjonto loop cholbe
while (i < fruits.length) {

  // Current index er fruit print korbe
  console.log("Khabo:", fruits[i]);

  // Prottek iteration e i 1 kore barbe
  // Eta na dile infinite loop hote pare
  i++;
}


// ============================================
// PART 6: FUNCTION AND DRY PRINCIPLE
// ============================================

// DRY = Don't Repeat Yourself
// Ekoi kaj bar bar na likhe reusable function use kora hoy

// Price valid kina check kore
function isValidPrice(price) {

  // Price number hote hobe, finite hote hobe ebong 0 er beshi hote hobe
  return typeof price === "number" &&
         Number.isFinite(price) &&
         price > 0;
}


// Email er basic format check kore
function isValidEmail(email) {

  // Email string kina ebong basic email pattern match kore kina check kore
  return typeof email === "string" &&
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// Discount calculate kore
function calculateDiscount(price, discountPercent) {

  // Price ebong discount percentage valid kina check kore
  if (
    !isValidPrice(price) ||
    typeof discountPercent !== "number" ||
    !Number.isFinite(discountPercent) ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {

    // Invalid input hole null return korbe
    return null;
  }

  // Original price er upor discount amount calculate kore
  let discountAmount = (price * discountPercent) / 100;

  // Discount bad deyar por baki price return kore
  return price - discountAmount;
}


// VAT jog kore final bill calculate kore
function calculateFinalBill(price, vatPercentage = 15) {

  // Price ebong VAT percentage valid kina check kore
  if (
    !isValidPrice(price) ||
    typeof vatPercentage !== "number" ||
    !Number.isFinite(vatPercentage) ||
    vatPercentage < 0
  ) {

    // Invalid input hole null return korbe
    return null;
  }

  // Price er upor VAT amount calculate kore
  let vat = (price * vatPercentage) / 100;

  // Original price er sathe VAT jog kore return kore
  return price + vat;
}


// BDT format e amount show korar function
function formatBDT(amount) {

  // toFixed(2) decimal er por 2 ta digit show kore
  // Example: 2000 hoye jabe "2000.00 BDT"
  return `${amount.toFixed(2)} BDT`;
}


// String er prothom letter capital kore
function capitalize(str) {

  // Input string na hole ba empty hole empty string return kore
  if (typeof str !== "string" || !str) {
    return "";
  }

  // charAt(0) prothom character ney
  // toUpperCase() capital kore
  // slice(1) baki character gulo ney
  return str.charAt(0).toUpperCase() + str.slice(1);
}


// ============================================
// PART 7: ORDER PROCESSING SYSTEM
// ============================================

// User er information, product price ebong discount code niye order process kore
function processOrder(user, itemPrice, discountCode) {

  // User er naam capitalize kore heading print kore
  console.log(
    `--- Processing order for ${capitalize(user.name)} ---`
  );

  // User, name, email ebong price valid kina check kore
  if (
    !user ||
    typeof user.name !== "string" ||
    !isValidEmail(user.email) ||
    !isValidPrice(itemPrice)
  ) {

    // Invalid data hole error dekhabe
    console.log("Error: Invalid user or price");

    // return function ekhanei stop kore
    return;
  }

  // Discount er age original price copy kore rakhe
  let currentPrice = itemPrice;

  // Discount code NLB hole 20% discount apply hobe
  if (discountCode === "NLB") {

    // Discount er por notun price currentPrice e save hobe
    currentPrice = calculateDiscount(itemPrice, 20);

    // Discount apply howar message dekhabe
    console.log("20% discount applied");
  }

  // Discount er porer price er upor VAT calculate korbe
  let totalBill = calculateFinalBill(currentPrice);

  // Bill calculation fail hole error dekhabe
  if (totalBill === null) {
    console.log("Error: Bill calculation failed");
    return;
  }

  // Original price print korbe
  console.log("Original Price:", formatBDT(itemPrice));

  // Discount er porer price print korbe
  console.log("Price After Discount:", formatBDT(currentPrice));

  // VAT shoho final amount print korbe
  console.log("Final Amount to Pay:", formatBDT(totalBill));

  // Order successful message dekhabe
  console.log("Order completed successfully");
}


// User er sample information
let user1 = {
  name: "Shafayat",
  email: "shafayat.ph@gmail.com",
};

// Function call kore 2000 taka price ebong NLB discount code pathano hoy
processOrder(user1, 2000, "NLB");


// ============================================
// PART 8: STUDENT MANAGEMENT MINI PROJECT
// ============================================

// Initial student data
let students = [
  { id: 101, name: "Rahim", age: 20, department: "CSE" },
  { id: 102, name: "Karim", age: 22, department: "EEE" },
];


// Notun student add korar function
function addStudent(name, age, dept) {

  // Student thakle last student er ID er sathe 1 jog kore
  // Student na thakle ID 101 theke shuru kore
  let newId =
    students.length > 0
      ? students[students.length - 1].id + 1
      : 101;

  // Notun student er object toiri kore
  let newStudent = {
    id: newId,
    name: name,
    age: age,
    department: dept,
  };

  // push() diye notun student array te add kore
  students.push(newStudent);

  // Success message ebong notun student show kore
  console.log("Student added successfully:", newStudent);
}


// Shob student dekhanor function
function getAllStudents() {

  // Array er prottek student er upor loop chalay
  for (const student of students) {

    // Prottek student er object print kore
    console.log(student);
  }
}


// ID diye student khuje ber korar function
function findStudent(id) {

  // Prothome kono student paoa jayni dhore nicchi
  let foundStudent = null;

  // Prottek student check kore
  for (let student of students) {

    // Student er ID requested ID er soman kina check kore
    if (student.id === id) {

      // Match hole student object save kore
      foundStudent = student;

      // Student paoa gele loop bondho kore
      break;
    }
  }

  // Student paoa gele tar information show korbe
  if (foundStudent) {
    console.log("Found Student:", foundStudent);
  } else {

    // Student na paoa gele not found message dekhabe
    console.log("404: Student not found");
  }
}


// ID diye student delete korar function
function deleteStudent(id) {

  // -1 mane ekhono student er index paoa jayni
  let targetIndex = -1;

  // Array er prottek index check kore
  for (let i = 0; i < students.length; i++) {

    // Current student er ID match korle
    if (students[i].id === id) {

      // Matching index save kore
      targetIndex = i;

      // Match paoa gele loop stop kore
      break;
    }
  }

  // Index -1 na hole student paoa geche
  if (targetIndex !== -1) {

    // splice() matching index theke 1 ta student remove kore
    // Deleted student er array return kore
    let deletedStudent = students.splice(targetIndex, 1);

    // Deleted student er naam ebong requested ID show kore
    console.log(
      `Deleted Student: ${deletedStudent[0].name}, ID: ${id}`
    );
  } else {

    // Matching ID na pele error message dekhabe
    console.log("404: Student not found");
  }
}


// Mini project test

// Notun student add korbe
addStudent("Fahim", 25, "AI");

// ID 102 er student khujbe
findStudent(102);

// ID 101 er student delete korbe
deleteStudent(101);

// Delete er por remaining student gulo show korbe
getAllStudents();


// ============================================
// PART 9: NESTED OBJECT AND ARRAY
// ============================================

// Object er vitore arekta object thakle take nested object bole
let user = {
  name: "Shafayat",
  age: 25,

  // address property er value nijei ekta object
  address: {
    city: "Rajshahi",
    area: "Upashahar",
    zipcode: 6000,
  },
};


// Dot notation diye nested object er city access kore
console.log(user.address.city);

// Bracket notation diye zipcode access kore
console.log(user["address"]["zipcode"]);


// Object.entries() prottek property ke [key, value] array te rakhe
let entries = Object.entries(user);

// Key-value pair er shob entry print kore
console.log("Object Entries:", entries);


// Object er moddhe nested object ebong array er example
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

    // Ei student er address er moddhe nested array ache
    address: {
      area: "Badda",
      thana: "Vatara",
      lane: "Embassy Lane",
      options: ["Victor", "Dhaka Chaka"],
    },
  },
];


// studentList[2] mane third student
// address.options[1] mane options array er second element
// Sei value update kore Premium rakha hocche
studentList[2].address.options[1] = "Premium";

// Updated value print kore
console.log(studentList[2].address.options[1]);


// ============================================
// PART 10: OBJECT OPERATIONS
// ============================================

// Ekta customer object toiri korchi
let customer = {
  name: "Shafayat",
  age: 25,
  address: "Dhaka",
};


// delete diye address property remove kore
delete customer.address;


// Notun address property add kore
customer.address = "Rajshahi";


// Existing age property er value update kore
customer.age = 26;


// address er value string theke nested object e convert kore
customer.address = {
  city: "Rajshahi",
  area: "Upashahar",
};


// Object.keys() shudhu property name er array return kore
console.log("Object Keys:", Object.keys(customer));


// Object.values() shudhu property value er array return kore
console.log("Object Values:", Object.values(customer));


// Object.entries() prottek key-value pair er array return kore
console.log("Object Entries:", Object.entries(customer));


// ============================================
// PART 11: STUDENT MARKS AND AVERAGE
// ============================================

// Student er basic information ebong subject-wise marks
let student = {
  name: "Rahim",
  id: 102,

  // Nested object e prottek subject er mark rakha hoyeche
  marks: {
    bangla: 75,
    english: 82,
    math: 90,
  },
};


// Total marks jog korar jonno initial value 0
let totalMarks = 0;

// Mot subject gonona korar jonno initial value 0
let totalSubjects = 0;


// for...in diye marks object er property gulo access kore
for (const subject in student.marks) {

  // Current subject er mark total er sathe jog kore
  totalMarks += student.marks[subject];

  // Prottek subject er jonno counter 1 kore baray
  totalSubjects++;
}


// Total marks ke subject er shonkha diye vag kore average ber kore
let average = totalMarks / totalSubjects;


// Student er naam show kore
console.log("Student Name:", student.name);

// Shob subject er total mark show kore
console.log("Total Marks:", totalMarks);

// Mot subject er shonkha show kore
console.log("Total Subjects:", totalSubjects);

// Average decimal er por 2 digit e show kore
console.log("Average Marks:", average.toFixed(2));


// Average 80 ba tar beshi hole distinction
if (average >= 80) {

  // Student er average result show kore
  console.log(
    "Passed with distinction. Got",
    average.toFixed(2),
    "%"
  );
} else {

  // Average 80 er kom hole ei message show kore
  console.log("Aro bhalo kore porashuna korte hobe");
}


// ============================================
// PART 12: SHOPPING CART BILLING MINI PROJECT
// ============================================

// Prottek product er naam, unit price ebong quantity ache
let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1800, quantity: 1 },
  { name: "Socks", price: 150, quantity: 3 },
];


// Shopping cart er total quantity ebong bill calculate korar function
function calculateCartBill(cartItems) {

  // Shob product er quantity jog korar variable
  let totalQuantity = 0;

  // Shob product er subtotal jog korar variable
  let totalBill = 0;

  // Invoice er heading print kore
  console.log("========== SHOPPING INVOICE ==========");

  // Cart er prottek product er upor loop chalay
  for (const item of cartItems) {

    // Product er data valid kina check kore
    if (
      !item ||
      typeof item.name !== "string" ||
      !isValidPrice(item.price) ||
      !Number.isInteger(item.quantity) ||
      item.quantity <= 0
    ) {

      // Invalid product hole error show kore
      console.log("Invalid item skipped");

      // Invalid product skip kore porer product e jay
      continue;
    }

    // Product er unit price ke quantity diye gun kore subtotal ber kore
    let subtotal = item.price * item.quantity;

    // Current product er quantity total quantity te jog kore
    totalQuantity += item.quantity;

    // Current product er subtotal total bill e jog kore
    totalBill += subtotal;

    // Product er naam, quantity, unit price ebong subtotal show kore
    console.log(
      `${item.name}: ${item.quantity} x ${formatBDT(item.price)} = ${formatBDT(subtotal)}`
    );
  }

  // Invoice er majhe divider show kore
  console.log("--------------------------------------");

  // Mot koyta product unit kena hoyeche show kore
  console.log("Total Items:", totalQuantity);

  // Shob product er total bill BDT format e show kore
  console.log("Total Bill:", formatBDT(totalBill));

  // Shopping seshe message show kore
  console.log("Thank you for shopping!");

  // Invoice er closing line
  console.log("======================================");
}


// Function call kore cart er bill calculate kore
calculateCartBill(cart);
