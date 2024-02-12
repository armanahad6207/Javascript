// rest and spred has same syntax which is three dots(...)but differ in function

// spread operator(...spread)(...any_name) =>it helps us to expand or unfold an itreable in an arrya or object

// merge tow array into a single array using ...spread opreator in order

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

var arr3 = [...arr1, ...arr2];
console.log(arr3); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// append data inside existing array using spread operator
var arr = [...arr1, 11, 12];
console.log(arr); //[ 1,  2,  3, 4, 5, 11, 12]

// same in Object

var student = { name: "arman", id: 123, percentage: "80%" };

// copy objects into another object

var student2 = { ...student };
console.log(student2); //{ name: 'arman', id: 123, percentage: '80%' }

//append address
student = { ...student, address: "nagri" };
console.log(student); //{ name: 'arman', id: 123, percentage: '80%', address: 'nagri' }

// rest operator is a converse of spread operator,it compresses them,(fold)

var marks = [67, 89, 90, 86, 89, 34];
var [math, chemastry, ...restmarks] = marks;
console.log(" math= " + math);
console.log(" chemastry= " + chemastry);
console.log(restmarks); //[ 90, 86, 89, 34 ]

// find average using ...rest operator

const average = (...args) => {
  console.log(args);
  return (
    args.reduce(function (a, b) {
      return a + b;
    }, 0) / args.length
  );
};

console.log("average of " + average(2, 3, 5, 10));
// [ 2, 3, 5, 10 ]
// average of 5
