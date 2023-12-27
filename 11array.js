// array is a homogenious as well as heterogenious data type

// homogenious => same data type

let a=["arman","ahad","anil","adi"];//array of string
let b=[12,34,56,23,45];//array of number
let c=[true,false];//array of boolean

// heterogenious => differnt data types

let d=["arman",56,"address",true];

var e=[3,7,9,8];
//     0 1 2 3 (index)
console.log(typeof(e));//object

console.log(e[2])//9
console.log(e[0]);//3

var city=["ranchi","dhanbad","lohardaga","jamsedhpur","tata"];
// ["ranchi","dhanbad","lohardaga","jamsedhpur","tata"];
//    0         1          2            3         4

// push() => Add data at the end of array

console.log(city.push("gumla"))//6(length of an array)

console.log(city);//[ 'ranchi', 'dhanbad', 'lohardaga', 'jamsedhpur', 'tata', 'gumla' ]

city.push("patna","mumbai");
console.log(city);//[ 'ranchi', 'dhanbad', 'lohardaga', 'jamsedhpur', 'tata', 'gumla', 'patna', 'mumbai']


//pop() => remove data from end of an array and return;
var city=[
    'ranchi',
    'dhanbad',
    'lohardaga',
    'jamsedhpur',
    'tata',
    'gumla',
    'patna',
    'mumbai'
  ]
  console.log(city.pop());//mumbai
  console.log(city.pop());//patna

  console.log(city);//[ 'ranchi', 'dhanbad', 'lohardaga', 'jamsedhpur', 'tata', 'gumla' ]


  //unshift() =>add data to the start of array;

  var city = [
    "Delhi",
    "Mumbai",
    "Helsinki",
    "London",
    "Amsterdam",
    "Boston",
    "Venice",
  ];

  console.log(city.unshift("ranchi"));//8(length)

  console.log(city.unshift("tata","hyderabad"));//10

  console.log(city);
//   [
//   'tata',   'hyderabad',
//   'ranchi', 'Delhi',
//   'Mumbai', 'Helsinki',
//   'London', 'Amsterdam',
//   'Boston', 'Venice'
// ]

var train = ["🚃", "🚃", "🚃"];
console.log(train.unshift("🚂", "🔗")); //5
console.log(train); //['🚂', '🔗', '🚃', '🚃', '🚃']

//shift() =>remove element at start of an array;
console.log(train.shift());//🚂
console.log(train);//[ '🔗', '🚃', '🚃', '🚃' ]




// slice(strtindex,endindex) => return new array, endindex(excluded)

var city = [
    "Delhi",
    "Mumbai",
    "Helsinki",
    "London",
    "Amsterdam",
    "Boston",
    "Venice",
  ];

  console.log(city.slice(3))//[ 'London', 'Amsterdam', 'Boston', 'Venice' ]
  console.log(city);
//   [
//     'Delhi',
//     'Mumbai',
//     'Helsinki',
//     'London',
//     'Amsterdam',
//     'Boston',
//     'Venice'
//   ]

console.log(city.slice(1,6))//[ 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston' ]
 console.log(city.slice(-1,-4));//[]
 console.log(city.slice(-4,-1));//[ 'London', 'Amsterdam', 'Boston' ]



 //splice
 //splice(startIndex, deleteCount,values);
 





