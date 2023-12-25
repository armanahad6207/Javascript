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

 console.log(a.slice(4));//trongNumber
 console.log(a.slice(2,6))//mstr => lastindex-excluded

 console.log(a.slice(-2,2));//""
 console.log(a.slice(-2,-7));//""


 console.log(a.slice(-7,-2));//gNumb

 var a="wakaanda"
 a.charAt(0).toUpperCase();//A

 var z=a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
 console.log(z)//Wakaanda

 //trim()

 var uname=" arman ahad "
 console.log(uname.length)//12
console.log(uname);//" arman ahad "
 uname=uname.trim();
 console.log(uname);//"arman ahad"

 
 // repalce()

 var a="i am learning javacript"
 a=a.replace("i am", "he is")
//  console.log();
 console.log(a);// he is learning javacript

 console.log(a.replace("iam","sheis"));//he is learning javacript

 console.log(a.replace(/javacript/g,"js"));//he is learning js


 //replaceAll(patern,replacement)

 const obj="this is my car"

 console.log(obj.replaceAll("i","I"));//thIs Is my car

 const string="hello everyone Hi hi";
 let patern="hi"
 let replacement="hey";
 let new_string=string.replaceAll(patern,replacement);
 console.log(new_string);//hello everyone Hi hey
 console.log(string);//hello everyone Hi hi


 //split()

 var z="hello everyone how are you";
 z=z.split(" ");
 console.log(z);//[ 'hello', 'everyone', 'how', 'are', 'you' ]
console.log(typeof(z));//object
console.log(z.at(0));//helo

console.log(z.toString());//hello,everyone,how,are,you

console.log(z.toString().replaceAll(","," "));//hello everyone how are you

  



 



