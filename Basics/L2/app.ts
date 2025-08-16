const person1: {
  firstName: string;
  age: number;
  xyz: {
    address: string;
  };
  skills: string[];
} = {
  firstName: "Rohit",
  age: 21,
  xyz: {
    address: "nalbari",
  },
  skills: ["react", "node", "mongodb"],
}

console.log(person1.firstName);
console.log(person1.xyz);
console.log("person1: ", person1);


let favoriteLan : string[];

favoriteLan = ["rohit", "sinngh"]
console.log(favoriteLan[1]);



//tuple
const person:{
  name: string;
  age: number;
  skills: string[];
  product: [number, string];
}={
  name: "rohit",
  age: 32,
  skills: ["react","node"],
  product: [1,"honor"]
}


enum Role{admin, author, read, user}

const person3 = {
  name: "patel",
  age: 21,
  skills: ["node"],
  product: [1, "lol"],
  role: Role.read,
}


if(person3.role === Role.author){
  console.log("author");
} else if(person3.role === Role.admin){
  console.log("admin"); 
} else if(person3.role === Role.user){
  console.log("user");
} else{
  console.log("read");
}