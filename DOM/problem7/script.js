var bar = document.querySelector('.progressbar')
let count = 0

let int =setInterval(() => {
    if(count === 99){
        clearInterval(int)
    }
     count++
    bar.style.width = count + '%'
   
    
}, 100);