const toastBtn = document.getElementById("toastBtn");
const toast = document.getElementById("toast")
toastBtn.addEventListener('click',()=>{
    toast.classList.remove('hidden')
    toast.classList.add('show')

    setTimeout(()=>{
        toast.classList.remove('show')
        toast.classList.add('hidden')
    },2000)
})



