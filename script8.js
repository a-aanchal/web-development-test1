// Problem statement 8: Predict Output and explain its output reason
sayHello(); //sayHello is function declaration, so it is hoisted
function sayHello() {
  console.log("Hello");
}
sayHi(); //sayHi is a function expression. only the variable declaration is hoisted, not the function expression.
var sayHi = function () {
  console.log("Hi");
};
