// for, while ,do while,for of ,for in(objects)

// it helps to iterate over the array as well as print the series

// for(variable; CSSConditionRule; increment/decrement)


for(let i=1;i<=10;i++){
    console.log(i);
    
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

var city = [
    "Delhi",
    "Mumbai",
    "Amsterdam",
    "Pune",
    "Paris",
    "Boston",
    "Venice",
  ];
for(let i=0;i<city.length;i++){
    console.log(city[i]);
}  

// Delhi
// Mumbai
// Amsterdam
// Pune
// Paris
// Boston
// Venice


for(i=0;i<city.length;i++){
    console.log(`<p>${city[i]}<p>`)
}
{/* <p>Delhi<p>
<p>Mumbai<p>
<p>Amsterdam<p>
<p>Pune<p>
<p>Paris<p>
<p>Boston<p>
<p>Venice<p> */}


var city = [
    "Dubai",
    "Innsburg",
    "France",
    ["Red", "Yellow", "Orange"],
    "London",
    "Pune",
  ];


  for(let i=0 ;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(let j=0;j<city[i].length;j++){
            console.log(city[i][j]);
        }
    }
else{
    console.log(` parent-array => ${city[i]}`)
}
  }
//   parent-array => Dubai
//  parent-array => Innsburg
//  parent-array => France
// Red
// Yellow
// Orange
//  parent-array => London
//  parent-array => Pune

// while loop
let q=0
while( q<10){
    console.log(q)
    q++;
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//  do while

var e=0
do{
    console.log("this code will execute once at a time whether the condition is tru or false")
    
}while(e!=0)
// this code will execute once  at a time whether the condition is tru or false

//for of 
var city = [
    "Dubai",
    "Innsburg",
    "France",
     ["Red", "Yellow", "Orange"],
    "London",
    "Pune",
  ];


  for(mycity of city){
    console.log(mycity);
  }
//   Dubai
// Innsburg
// France
// [ 'Red', 'Yellow', 'Orange' ]
// London
// Pune

for(mycity of city){
    if(Array.isArray(mycity)){
        for(colony of mycity){
            console.log(`colony = ${colony}` )
        }
    }
    else{
        console.log(mycity);
    }
}
// Dubai
// Innsburg
// France
// colony = Red
// colony = Yellow
// colony = Orange
// London
// Pune

// forEach

var arr=[1,2 ,34,56 ,78,67];


 arr.forEach(function (val){
    console.log(val);
 }
);
 
// 1
// 2
// 34
// 56
// 78
// 67
 
 
 

