// Object or Array destructuring => mean assign a object or array properties into a single value
// suppose that
var obj = {
  name: "arman",
  age: 23,
  address: "nagri",
};
// in simple way we can assign this properties into a single variable
// const name = obj.name;
// const age = obj.age;
// const address = obj.address;
// console.log(`age = ${age}, name = ${name}, address = ${address}`); // age = 23, name = arman, address = nagri

// /now by using destrucuting

// let { name, age, address } = obj;

// console.log(`age = ${age}, name = ${name}, address = ${address}`); //age = 23, name = arman, address = nagri

let { age } = obj;
console.log(age); // unsequence access with only object

// in this example Addressnew property does not exist in object

let { Addressnew } = obj;
console.log(Addressnew); // undefined

// setting default values

let student = {
  stdid: 120,
  stdname: "aarmanahad",
  stdpercentage: "82%",
  currentAge: 23,
};

let {
  stdid,
  stdname,
  stdpercentage,
  stdpromoted = "promoted",
  currentAge: oldage = 12,
} = student;
console.log(stdpromoted); //it will not affect original object
console.log(student); //{ stdid: 120,stdname: 'aarmanahad', stdpercentage: '82%', currentAge: 23 }
console.log(oldage); //23

// Array destructuring

let arr = [12, 34, 45, 56];
