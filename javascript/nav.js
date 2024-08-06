let checkbox=document.getElementById('menubar');
const body=document.body;
const menu_btn=document.querySelector('.navication_container .right .menu label')

menu_btn.addEventListener('click',()=>{
    checkbox.checked==true?body.classList.remove("scroll_hidden"):body.classList.add("scroll_hidden");
})


