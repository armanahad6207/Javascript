//add two number
function addTwoNumber(a,b){
    var sum=a+b;
    return sum;
 }

 console.log(addTwoNumber(23,34));

 //check even or odd

 function isEvenOdd(input){
    if(input%2==0){
        return `${input} is even`;
    }
    else{
        return `${input} is odd`;
    }
 }


 console.log(isEvenOdd(23));//23 is odd
 console.log(isEvenOdd(24));//24 is even

 // check prime number
  function isPrime(input){
    if(input<=1){
        return `${input} is not prime number`;
    }
    
     else{
        
        for(let i=2;i<input;i++){
            if(input%i==0){
                console.log(i);
                return `${input} is not prime`;
               
            }
            
        }
        return `${input} is prime number`;
     }   
        
    

    
  }
  console.log(isPrime(-4));//-4 is not prime number
  console.log(isPrime(34854213));//34854213 is not prime


//   arrow function

//   var name = () =>{}


var add = (a,b) =>{return a+b;};
console.log(add(2,3));


const welcome = () => console.log("welcome to the world of AI");

welcome();





 