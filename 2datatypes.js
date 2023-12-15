//true = 1
//false = 0

true+true //2

true+false //1

"true"+false //'truefalse'

"true"+"true" //'truetrue'

true-true //0
"true"-false  //NaN

"true"-"true" //NaN

"23"-1 //22

var a="22";
var b="34"
a+b;//"2234"

//typecasting  ==>> convert one data type to another data type
parseInt(a)//22
parseInt(b)//34
a+b //"2234"
parseInt(a)+parseInt(b)//56

var a="23.4"
var b="34.5"
parseInt(a)+parseInt(b)//57
23    +    34

parseFloat(a)+parseFloat(b)//57.9
 23.4  +  34.5
 var c=+a + +b;
 console.log(c);

 Number(a)+Number(b)//57.9
 23.4   +   34.5

 var a="123asdlkdsd";
 var b="askj123";
 var c="123kadm333";

 parseInt(a)// 123
 parseInt(b)//NaN
 parseInt(c) //123

 Number(a) //NaN
 Number(b) //NaN
 Number(c) //NaN


