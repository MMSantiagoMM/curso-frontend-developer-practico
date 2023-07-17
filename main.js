const NavEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
NavEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive')

}