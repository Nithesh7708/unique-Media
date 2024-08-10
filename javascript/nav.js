let checkbox=document.getElementById('menubar');
const body=document.body;
let menu_pages=document.querySelector(".menu-list-container")
const menu_btn=document.querySelector('.navication_container .right .menu label')

menu_btn.addEventListener('click',()=>{
    checkbox.checked==true?body.classList.remove("scroll_hidden"):body.classList.add("scroll_hidden");
    checkbox.checked==true?menu_pages.style.display="none":menu_pages.style.display="flex"
})

// Mouse animation
var pos =document.documentElement;
pos.addEventListener('mousemove',(e)=>{
   let x= pos.style.setProperty('--x',e.clientX+'px')
  let y=  pos.style.setProperty('--y',e.clientY+'px')
  
})

// --------Menu-List---------------
let menu_icon=document.querySelector(".menu label");
let menu_checkbox=document.getElementById("menubar");
let menu_list=document.getElementById("menu_list_checkbox")

menu_icon.addEventListener('click',()=>{
menu_checkbox.checked==true?menu_list.checked=false:menu_list.checked=true;
})




