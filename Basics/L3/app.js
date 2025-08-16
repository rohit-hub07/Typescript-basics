function combine(num1, num2) {
    var res;
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    return num1.toString() + num2.toString();
}
var res = combine("rohit", "singh");
var res2 = combine(10, 45);
console.log(res);
console.log(res2);
function combine2(num1, num2) {
    var res;
    return +num1 + +num2;
}
var user = {
    name: "Patel",
    age: 22,
};
function greet(user) {
    console.log("Hi ".concat(user.name));
}
greet(user);
