// let userInput : unknown;
var userInput;
var userName;
userInput = 10;
userName = "Patel";
// userName = userInput;
//never return type 
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal server error", 500);
console.log(res);
