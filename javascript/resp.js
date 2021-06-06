let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')

let rightNav = document.querySelector('.rightNav')
let navList = document.querySelector('.nav-list')


burger.addEventListener("click",()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    
});