function combine(num1:number | string, num2: number | string){
  let res:number;
  if(typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  
  return num1.toString() + num2.toString();
}

let res: number | string = combine("rohit", "singh");
let res2: number | string = combine(10, 45);
console.log(res);
console.log(res2);


//Type allias
type Combinable = number | string;

function combine2(num1:Combinable, num2: Combinable){
  let res:number;
  return +num1 + +num2;
}

type User = {
  name: string;
  age: number;
}

const user: User = {
  name:"rohit",
  age: 22,
}

function greet(user: User){
  console.log(`Hi ${user.name}`)
}

greet(user);