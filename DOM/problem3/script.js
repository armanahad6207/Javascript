var form = document.querySelector('form');
var inps = document.querySelectorAll('input[type="text"]')

var er = document.querySelector("#error")
form.addEventListener('submit',(event)=>{
    event.preventDefault()
     for(let i = 0 ; i<inps.length ; i++)
     {
        if(inps[i].value.trim()===''){
            er.textContent="All fields are required...."
            er.style.color= "red"
            er.style.fontSize = "12px"
            break;
        }
        else{
            er.textContent = ""
        }
     }
   
    
})