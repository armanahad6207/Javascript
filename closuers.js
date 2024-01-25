// function along with lexical scope and bind together that forms a closuer
// closure => own scope + lexical scope

function outer(){
    var a=20;
     return function inner(){
        console.log(a)
    }
}

 var z=outer();
 console.log(z);// display inner()

z();//20


//hoisting + lexical scope
let price=1000;

// arow function
function getPrice(){
// console.log(`old price ${price}`) old price display un defined
    let price=200;
    console.log(`new price ${price}`) // 200
   
};

getPrice()