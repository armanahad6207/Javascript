var add = document.querySelector('#add')
var remove = document.querySelector('#remove')
var inp = document.querySelector('input')
var ul = document.querySelector('ul')

var newList


add.addEventListener('click',()=>{
    if(inp.value.trim() === ''){
        alert("write content")
    }
    else{
        // ADD NEW LIST
         newList = document.createElement('li')
        newList.textContent = inp.value
       ul.appendChild(newList)
        inp.value = ''
        //REMOVE LIST
     }    
   
})

remove.addEventListener('click',()=>{
    ul.removeChild(newList)

})







