let checkbox=document.getElementById('menubar');
const body=document.body;
const menu_btn=document.querySelector('.navication_container .right .menu label')

menu_btn.addEventListener('click',()=>{
    checkbox.checked==true?body.classList.remove("scroll_hidden"):body.classList.add("scroll_hidden");
})

// Mouse animation
var pos =document.documentElement;
pos.addEventListener('mousemove',(e)=>{
   let x= pos.style.setProperty('--x',e.clientX+'px')
  let y=  pos.style.setProperty('--y',e.clientY+'px')
  
})