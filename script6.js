// problem statement 6

// consider the following code 
// console.log(a); /*var variables are hoisted Only the declaration is hoisted, not the assignment So a exists but has no value yetso the result is undefined*/
//console.log(b);
/*let and const variables are also hoisted but they are not initialized so accessing them before initialization throws a ReferenceError*/
// var a = 10;
// let b = 20;
// function test() {
//     console.log(c);/*Similar to let and const variables, accessing c before its declaration throws a ReferenceError*/
//     var c = 30;
// }
// test();
/*1.Predicted Output: undefined, ReferenceError: Cannot access 'b' before initialization*/

// Rewrite the code
var a = 10;
let b = 20;
console.log(a);
console.log(b);
function test() {
    var c = 30;
    console.log(c);
}       
test();
// output: 10,20,30