// A callback is a function that is passed as an argument to another function
  setTimeout(function xyz(){
     console.log("after 4 second")
  },4000)
function x(y){
    console.log("x function")
    y();
}

x( function y(){
    console.log("y function")
});