// object

let user = {
  name: "Shafayat",
  age: 25,
  address: "Dhaka",
};

// console.log(user["name"]); //user[`${}`]
delete user.address;
user.address = "Rajshahi";
user.address = {
  city: "Rajshahi",
  area: "Upashahar",
};
// console.log(user);

console.log(Object.keys(user));