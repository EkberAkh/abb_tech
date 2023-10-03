const menuBtn = document.getElementById("menu-btn");
const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const xMark = document.getElementById("xmark")


menuBtn.addEventListener("click",()=>{
hamburger.classList.toggle('d-none')
    xMark.classList.toggle('d-block');  
    
    hamburgerMenu.classList.toggle("d-none")
})