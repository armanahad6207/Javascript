// Anonymous function => the function without name

//   function (){

//   }

//   we can note use directly like that
//   Anonymous function used as a value


// difference between function statement and function expression

// its all about hoisting

// abc();=>function declaration and satement
// b();=>b is not a function


// function statement or function declaration  

function abc(){
    console.log("function declaration and satement")
}

abc();


// function Expression  => when a anonymous  assigned as a value to any variable is known as function expression

var b= function (){
    console.log("function expression")
}
 b();


// named function expression => when a named function assign to any variable as a value

var c=function named(){
    console.log("named function expression")
}

 c();
// named();  ReferenceError: named is not defined


// first class function or first class citizens
// the functions can be assigned to any other variable or passed as an argument or can be returned by another function.


var o=function(name){
    return function f(){
     console.log(name)
    }
}

 var z=o(function (){});
 z();  //[Function (anonymous)]

// Usage of First-Class Function
// It can be stored as a value in a variable.
// It can be returned by another function.
// It can be passed into another function as a parameter.
// It can also stored in an array, queue, or stack.
// Also, It can have its own methods and property.