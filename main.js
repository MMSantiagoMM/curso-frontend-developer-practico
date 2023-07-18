const NavEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamburguer = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')



NavEmail.addEventListener('click',toggleDesktopMenu)
menuHamburguer.addEventListener('click',togglemobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')

}

function togglemobileMenu(){
    mobileMenu.classList.toggle('inactive')
}