const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
