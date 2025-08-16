// function return type 
function add(num1, num2) {
    return num1 + num2;
}
var res = add(3, 4);
console.log(res);
function greet(name) {
    console.log("Hi, ".concat(name));
}
greet("rohit");
var combine;
combine = function () { console.log("hello rohit!"); };
var combineFunction;
combineFunction = add;
console.log(combineFunction(4, 5));
//callbacks
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(67, 3, function (num) {
    console.log(num);
});
