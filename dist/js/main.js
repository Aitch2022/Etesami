const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-menu__item');

let ShowMenu = false;

menuBtn.addEventListener('click', toggelMenu)

function toggelMenu() {
    if(!ShowMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        ShowMenu = true;
    }else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        navItems.forEach (item => item.classList.remove('open'));


        ShowMenu = false;
    }
}