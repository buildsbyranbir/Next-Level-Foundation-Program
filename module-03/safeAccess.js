// Optional Chaining & Nullish Coalescing (?., ??, Safe Property Access
let user1 = {
  name: "Rahim",
  address: {
    city: "Dhaka",
  },
};

let user2 = {
  name: "Karim",
  // no address
};

// optional chaining ?
console.log(user1?.address?.city); // Dhaka
console.log(user2?.address?.city);

// nulish collescing ?? undefined or null hoi sekhetre 
console.log(user2?.address?.city ?? "Rajshahi");