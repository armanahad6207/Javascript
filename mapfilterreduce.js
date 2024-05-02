let arr = [1, 2, 3, 4];

// map
// output
// result1=[4,8,12,16]
//result2=[ '1', '10', '11', '100' ]

let result1 = arr.map((val) => {
  return val * 4;
});
console.log(result1);
// [ 4, 8, 12, 16 ]

let result2 = arr.map((val) => {
  return val.toString(2);
});
console.log(result2);
//[ '1', '10', '11', '100' ]

const Userdata = [
  { firstname: "arman", lastname: "ahad", id: 22 },
  { firstname: "adi", lastname: "singh", id: 23 },
  { firstname: "anil", lastname: "kumar", id: 22 },
  { firstname: "akash", lastname: "rathore", id: 22 },
  { firstname: "dubai", lastname: "oran", id: 23 },
];

// output1  [armana had,adi singh,anil kumar]
//output2   [22:3,23:2] use redue function

let output = Userdata.map((user) => {
  let name = `${user.firstname} ${user.lastname}`;
  return name;
});
console.log(output);
["arman ahad", "adi singh", "anil kumar"];

//filter function

const arr2 = [3, 5, 4, 8, 9, 10, 32];

//we want even number
let evennum = arr2.filter((val) => {
  return val % 2 === 0;
});
console.log(evennum);
[4, 8, 10, 32];

// reduce function

let arr3 = [1, 2, 3, 4, 5, 6];
// sum=1+2+3+4+5+6=21

let sum = arr3.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
}, 0);
console.log("sum of array : " + sum);
// sum of array : 21
