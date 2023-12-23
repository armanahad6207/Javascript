var a="armanahad";

console.log(a.toUpperCase());//ARMANAHAD
 
var a="ARMANAHAD";
console.log(a.toLowerCase());//armanahad

var city="Bangalore"
// B  a  n  g  a  l  o  r  e
// 0  1  2  3  4  5  6  7  8
//-9 -8 -7 -6 -5 -4 -3 -2 -1 

console.log(city.length);//9

console.log(city[4]);//a
console.log(city[-4]);//undefined

// good practice
console.log(city.charAt(3));//g
console.log(city.charAt(-8));//""


console.log(city.at(5));//l
console.log(city.at(2));//n
console.log(city.at(-4))//l its only working for at()
console.log(city.at(-9))//B

 var a="tiGer"
 var b="Tiger"
 console.log(a==b)//false t!=T 7 G!=g

 a=a.toLowerCase()//tiger
 b=b.toLowerCase()//tiger
 console.log(a==b);//true

 // slice(strtIndex) => extract the string characters

 var a="ArmstrongNumber";

 console.log(a.slice(2));//"mstrongNumber"
 console.log(typeof(a.slice(2)));//string


