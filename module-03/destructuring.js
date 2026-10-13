//Destructuring
const student = {
  name: "Rahim",
  age: 20,
  address: "Dhaka",
};

// old
const OldName = student.name;

// new
const { age, address, name } = student;

// console.log(name);
const student1 = {
  name: "fahim",
  age: 20,
  address: {
    city: "Dhaka",
    zip: 1212,
  },
};

// nested & name alias
const {
  name: stdName,
  address: { city, zip },
} = student1;

// console.log(stdName, city);

const arr = ["Red", "Green", "Black"];

// const [first, second, third] = arr;
const [, , third] = arr;

// console.log(third);

const student2 = {
  name: "fahim",
  age: 20,
  address: {
    city: "Dhaka",
    zip: 1212,
  },
  hobbies: ["Gardening", "Painting"],
};

const {
  name: std2Name,
  address: { city: stdCity },
  hobbies: [firstHobby],
} = student2;

// console.log(firstHobby, stdCity);

const arr2 = ["test1", ["test100", "test300"]];

const [, [, test]] = arr2;

console.log(test);