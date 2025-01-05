var start = document.querySelector('#start')
var stop = document.querySelector('#stop')
var count = 0
var h2 = document.querySelector('h2')
var int

start.addEventListener('click',()=>{
    
  int = setInterval(()=>{
      h2.textContent = count
      count++

    },1000)    
    
})

stop.addEventListener('click', ()=>{
    clearInterval(int)
})

