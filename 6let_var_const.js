// var => we can redeclare and reassign
//let => we can not redeclare but can reassign
//const =>we cannot redeclare nor reassign

var a =10;
var a;//decleration
var a=20;//assignment

var a=10
a=11
console.log(a); //11
//redeclare
var a=11;
var a=12;
console.log(a);//12


//let redeclare
// let a=23;
// let a=34;
// console.log(a)//Identifier 'a' has already been declared


// let reassign
let x=34;
x=45;
console.log(x)//45

//const redeclare
// const c=23;
// const c=34;
// console.log(c)  Identifier 'c' has already been declared

//reassign
// const c=23;
// c=34;
// console.log(c) //Assignment to constant variable.


console.log(g);// undefined
//1000
var g=23;


// console.log(z)//Cannot access 'z' before initialization
// let z=23;

let t;
console.log(t)//undefined also for var

// const t;
// console.log(t)//Missing initializer in const declaration

// var =>global scope
// let,const =>block scope = {}


var a = 10;
a = 11;
console.log(a);

