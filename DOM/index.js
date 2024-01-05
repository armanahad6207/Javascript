//DOM =>Documnet Object Model

//pillers of dom;


// const a = document.querySelector("h1");
// console.log(a);

var a = document.querySelector("h1");
a.innerText="updated by dom";
a.style.color="yellow";
a.style.backgroundColor="#000";
a.style.cursor="pointer";


a.addEventListener('click',function(){
           a.style.color ="#000";
           a.style.backgroundColor = "green"
           a.innerHTML="<em> clicked clicked</em>"
        
         
});
const blb=document.querySelector(".bulb");
const btn=document.querySelector("button")
var flag=0;
btn.addEventListener('click',function(){
    if(flag==0){
        blb.style.backgroundColor="yellow"
        btn.innerHTML="OFF"
        flag=1;
        
    }
    else{
        blb.style.backgroundColor="white"
        btn.innerHTML="ON"
        flag=0;
    }
});

const theem=document.querySelector(".theem");
const body=document.querySelector("body");
var flag=0;
theem.addEventListener('click',function(){
   if(flag==0){
        body.style.backgroundColor="#172D13";
     theem.style.backgroundColor="#000"
     theem.style.color="yellow"
     flag=1
     }
     else{
        body.style.backgroundColor="white";
        theem.style.backgroundColor="white";
        theem.style.color="#000"
        flag=0;
     }
});