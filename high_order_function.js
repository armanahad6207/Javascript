// high order function => A function which takes another function as a argumnet,return function or
// or both is known as higher order function
// HOF provides abstraction,composition,more flexible aand reusable


function highOrderFunction(callback){
  //perform some operation
  callback();
}

function callBack(){
    console.log(" call back function executed");
}
// Passing the callback function to the higher-order function
highOrderFunction(callBack)

// Imaperative programing approach
var radius=[2,4,6,8];

function area(radius){
    var arr=[];
    for(let i=0;i<radius.length;i++){
        arr.push(3.14*radius[i]*radius[i]);
    }
    return arr;
}

console.log(area(radius))

function circumFrance(radius){
    var arr=[];
    for(let i=0;i<radius.length;i++){
        arr.push(2*3.14*radius[i]);
    }
    return arr;
}
console.log(circumFrance(radius))

function diameter(radius){
    var arr=[];
    for(let i=0;i<radius.length;i++){
        arr.push(2*radius[i]);
    }
    return arr;
}
console.log(diameter(radius))


//let use functional programing to solve these all
// we should learn functional programming to make our code more expressive, robust, and more readable.
//declarative programing approach
console.log("declarative programing")

const areaof=function(radius){
    return 3.14*radius*radius;
}
const circumFranceof=function(radius){
    return 2*(3.14*radius*radius);
}
const diameterof=function(radius){
    return 2*(3.14*radius*radius);
}

const calculate=function(radius,logic){
  var arr=[]
  for(let i=0;i<radius.length;i++){
     arr.push(logic(radius[i]));
  }
  return arr;
}
console.log(calculate(radius,areaof));
console.log(calculate(radius,circumFranceof));
console.log(calculate(radius,diameterof));
