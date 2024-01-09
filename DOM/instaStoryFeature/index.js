var storypic=[
    {
        dp:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1508852951744-beab078a4b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1670963965022-59c9ac468c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww"
    }
];
var storyia=document.querySelector(".storyia");
var clutter=""
storypic.forEach(function(elem,idx){
  clutter +=`<div  class="story">
  <img id="${idx}"  src="${elem.dp}" alt="">
</div>`
});
storyia.innerHTML=clutter;

storyia.addEventListener("click",function(dets){
    // console.log(storypic[dets.target.id].story)
    document.querySelector(".full-screen").style.display="block"
    document.querySelector(".full-screen").style.backgroundImage=`url(${storypic[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector(".full-screen").style.display="none"
    },2000)
})
//
