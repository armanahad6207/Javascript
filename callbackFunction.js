// A callback is a function that is passed as an argument to another function


// Callbacks are used to handle the results of asynchronous 
// operations in a non-blocking manner. Asynchronous operations
//  are operations that take a significant amount of time to complete,
//   such as network requests, file I/O, and database queries. 
//   If these operations were executed synchronously,
//    the program would freeze and wait for the operation to complete before
//     continuing. This can lead to a poor user experience, as the program would 
//     appear unresponsive./


function x(y){
    console.log("x function")
    y();
}

x( function y(){
    console.log("y function")
});

setTimeout(function xyz(){
    console.log("after 4 second")
 },4000);

//  => function xyz is a also a callback function