const menuClose =document.querySelector('.menu-close');
const menuOpen =document.querySelector('.menu-open');
const navContent =document.querySelector('.nav-content');
const mainbody =document.querySelector('main');
let overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const login = document.querySelector('.login');


menuOpen.addEventListener('click', () => {
    // changing the display property of menuOpen and menuClose
    menuOpen.style.opacity = '0';
    menuOpen.style.display = 'none';
    menuClose.style.opacity = '1';
    login.style.opacity = '1';
    menuClose.style.display = 'block';
    navContent.style.opacity = "1";
    body.classList.add('overlay');
    // overlay.style.display = "block";
});

menuClose.addEventListener('click', () => {
    // changing the display property of menuOpen and menuClose
    menuOpen.style.opacity = '1';
    menuOpen.style.display = 'block';
    menuClose.style.opacity = '0';
    menuClose.style.display = 'none';
    login.style.opacity = '0';
    navContent.style.opacity = "0";
    body.classList.remove('overlay');

    // overlay.style.display = "none";
});

