// promise return an  object in some time and some value in non-blocking state or async
// Promises are used to handle asynchronous operations in JavaScript.

//syntax
let promise = new Promise(function (resolve, reject) {
  //do somethingd
});

// the promise constructor take only one arguments which is callback function
// the callback function takes two argument resolve and reject
// if task inside a callback function goes well the call resolve
// if the task does not goes well the call reject

var createPromise = new Promise((resolve, reject) => {
  //do something
  console.log("some task doing");
  resolve();
});

createPromise.then(function () {
  console.log("promises done");
});
// some task doing
// promises done

function checkEven() {
  let num = 13;

  if (num % 2 == 0) {
    return 1;
  } else {
    return 0;
  }
}
new Promise((resolve, reject) => {
  if (checkEven()) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {
    console.log("as a promise it return even number");
  })
  .catch(() => {
    console.log("as a promise it did not return even number");
  });
//   as a promise it did not return wven number

// promises has three things 1>resolve 2>reject 3>pending
// promises object produce some value i  some time in a future Asynchronous(non blocking)
//  1>if promise resolve the it goes to .then() methode
//  2>if promise reject then it goes to .catch methode
//  3>if promise has not completed or in queue then it is in panding state

let doSomething = new Promise((resolve, reject) => {
  resolve("promise done by me");
  // reject(new Error("your promise rejected"));
});
console.log(doSomething);
doSomething
  .then((args) => {
    console.log(args);
    return 5;
  })
  //we can provide multiple then
  .then((args1) => {
    console.log(args1);
    return "goes to another then";
  })
  .then((args3) => {
    console.log(args3);
  });
doSomething.catch((measg) => {
  console.log("ERROR OCCURED:" + measg);
});

const waitFor = (settime) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, settime);
  });
};

waitFor(5000).then(() => {
  console.log("promised after 5 sec");
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json, json.title));
