// string - "arman","23423","asr453" 
// number -  123, 10.234
// Boolean - true false

// ES5
var a = 10;

// var a => declaration
//  a=10 => assignment

var b="hello";
var c=true;

console.log(typeof a); //number
console.log(typeof b);// string
console.log(typeof c);//boolean

 var e=234.45 // that is floating value

 console.log(typeof e); //number
  
 // string operations

  var a="hii";
  var b="javaScript";
   var c=a+b ;//concat
  ("hiijavascript");
  console.log(c);

  console.log(a-b); //NaN -> not a number
  console.log(a*b); //NaN -> not a number
  console.log(a/b); //NaN -> not a number


//   string + string => strings
//   string + number => string
//   number + string => string
//   number + number =>number

console.log("10"+10 +20 + 30); // 10102030

console.log( 10 + "20" + 23+ 34 );//10202334

console.log(20 + 34 +"20" + 30); // 542030

 var a= "18"+23+36-35; //182301
  console.log("10" + 20 + 30 - 29 ,a );//102001


  "102a" - 1 // NaN
   "10"  - 1 // 9
   console.log("10a"-2,"102"-2, "12"*2,"12"/2, "12"+2 ); //NaN 100 24 6 '122'

//    "arm"-"arm" => NaN
//    "12"-2 => 10
//    "12"+2 =>122 
console.log("12"+23 +34 -14 +34 +23 -1 +"23" +1 +1+1) //12237623111

console.log("0"+1+2+3+4+5);//012345 cocatination
 

