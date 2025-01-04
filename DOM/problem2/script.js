var btn = document.querySelector("button")
var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
btn.addEventListener('click',()=>{
    var img3 = img1.src
    img1.src = img2.src
    img2.src = img3
})
console.log(img1.src)