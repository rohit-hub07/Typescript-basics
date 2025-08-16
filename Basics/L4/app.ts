// function return type 

function add(num1: number, num2:number) : number{
   return  num1 + num2;
}

const res: number = add(3,4);

console.log(res);

function greet(name: string): void{
  console.log(`Hi, ${name}`); 
}

greet("rohit");

let combine: Function;

combine = function(){console.log("hello rohit!")}

let combineFunction : (a: number, b: number) => number;

combineFunction = add;

console.log(combineFunction(4,5));

//callbacks
function addHandle(num1: number, num2: number, cb: (n: number) => void){
  const result = num1 + num2;
  cb(result);
}

addHandle(67,3, (num)=> {
  console.log(num);
})