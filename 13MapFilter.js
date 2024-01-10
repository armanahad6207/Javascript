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
var b = a.map((item) => {
  return `<p>${item}</p>`;
});
console.log(b);//[ '<p>4</p>', '<p>8</p>', '<p>5</p>', '<p>23</p>' ]


