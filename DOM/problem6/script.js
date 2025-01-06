// var one = document.querySelector('#one')
// var two = document.querySelector('#two')
// var three = document.querySelector('#three')
// var textOne = document.querySelector('#textOne')
// var textTwo = document.querySelector('#textTwo')
// var textThree = document.querySelector('#textThree')

// textOne.style.display = "block"

// one.addEventListener('click',()=>{
//     hideText()
//     textOne.style.display = 'block'
// })
// two.addEventListener('click',()=>{
//     hideText()
//     textTwo.style.display = 'block'
// })
// three.addEventListener('click',()=>{
//     hideText()
//     textThree.style.display = 'block'
// })


// var hideText = ()=>{
//     textOne.style.display = "none"
//     textTwo.style.display = "none"
//     textThree.style.display = "none"
// }



let tab = document.querySelectorAll(".tab")
let text = document.querySelectorAll(".text")

text[0].style.display = 'block'

tab.forEach((tabs,index)=>{

    tabs.addEventListener('click',()=>{
      hiddenText()
        text[index].style.display = 'block'
        console.log(text[index])
        
    })
})


var hiddenText = ()=>{
    text.forEach((text)=>{

        text.style.display = "none"
    })
}