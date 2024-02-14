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
