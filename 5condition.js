// = > assignment
// == > compare the data
// === compare data and data type

var a=5;
var b="5";
var c=20;
 
//5=="5" true
//5 === "5" true+false =>false
console.log(a==b)//true
console.log(a===b); //false 
 
var a="hii";
var a="Hii";


// "hii" == "Hii" =>false
//"hii" === "Hii" =>false+true => false
console.log(a==b);//false
console.log(a===b);//false

var a=true;
var b=1;
console.log(a==b)//true
console.log(a===b)//false


var a=20;
var b=30;
// a>b  20>30 = false
// a<b 20<30=>true


// ! =>negation
// a!=b true 10!=20

// true=true
// false=false
// !true=false
// !false=true

console.log(a!==b);
// 20!=30 =true
// 20!==30 =true

// console.log(a!===b) Uncaught SyntaxError: Unexpected token '='

//falsy =>0,false,null undefined
//  truthy value = any number except 0, is turthy
var a=-1
console.log(!a) //  !a=false a=true


console.log(typeof null);//object
console.log(typeof undefined);//undefined
