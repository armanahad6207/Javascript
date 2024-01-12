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
