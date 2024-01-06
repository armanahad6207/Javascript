const stats=document.querySelector(".stranger");
const btn=document.querySelector(".addremove");
let check=0;
btn.addEventListener('click',function(){
    if(check==0){
        stats.innerHTML="Friend";
        stats.style.color="green"
        btn.style.backgroundColor="red"
        btn.innerHTML="remove"; 
        check=1;
    }
    else{
        stats.innerHTML="Stranger";
        stats.style.color="red";
        btn.style.backgroundColor="green";  
        btn.innerHTML="add Friend";
        check=0;
    }
});


