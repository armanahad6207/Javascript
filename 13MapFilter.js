//map
//used to iterate over the array
//it always return the same length of output array as input array
//it basically used to apply logics(add,sub,mul,div)

var arr=[12,3,5,6,8,9,23,5];

 arr.map((data)=>{
    console.log( data*2)
 });
//  24
//  6
//  10
//  12
//  16
//  18
//  46
//  10


var a = [4, 8, 5, 23];
var b= a.map((item) => {
  return `<p>${item}</p>`;
});
console.log(b);//[ '<p>4</p>', '<p>8</p>', '<p>5</p>', '<p>23</p>' ]

// double 
function double(x){
  return x*2
}
const output=a.map(double);
console.log(`double = ${output}`)


//filter
//it is used to filter out the value
//it may or may not return same lenght of output array as input array
//return only those data which output or condition is true

var arr=[12,34,56,79,23,17]

const check=arr.filter((data)=>{
    if(data%2==0){
      return data;
    }
   
})

console.log(check);
// [ 12, 34, 56 ]


const dbl=arr.filter((data)=>{
     return data*2;
})
console.log(`dbl of an array =  ${dbl}`);
//dbl of an array =  12,34,56,79,23,17

//callback => when you call function inside another function is call callback function


//a.map( () => {} )

var list=[

  {firstName:"arman",lastName:"ahad",age:23},
  {firstName:"anil",lastName:"kumar",age:60},
  {firstName:"aditya",lastName:"singh",age:34},
  {firstName:"rajkumar",lastName:"rao",age:23}
]

// [arman ahad,anil kumar,aditya singh,rajkumar rao] 

const result=list.map(x=>{
  return x.firstName+" "+x.lastName;
});
console.log(result);

// show the first name whose age is less than 30

const firstName=list.filter(function (x){
  if(x.age<30){
    return x;
  }
}).map(x=> x.firstName);
console.log(`age less than 30 ${firstName}`);
// age less than 30 arman,rajkumar

// reduces
