const menuClose =document.querySelector('.menu-close');
const menuOpen =document.querySelector('.menu-open');
const navContent =document.querySelector('.nav-content');
const mainbody =document.querySelector('main');
let overlay = document.querySelector('.overlay');

menuOpen.addEventListener('click', () => {
    // changing the display property of menuOpen and menuClose
    menuOpen.style.opacity = '0';
    menuOpen.style.display = 'none';
    menuClose.style.opacity = '1';
    menuClose.style.display = 'block';
    navContent.style.opacity = "1";
    overlay.style.display = "block";
});

menuClose.addEventListener('click', () => {
    // changing the display property of menuOpen and menuClose
    menuOpen.style.opacity = '1';
    menuOpen.style.display = 'block';
    menuClose.style.opacity = '0';
    menuClose.style.display = 'none';
    navContent.style.opacity = "0";
    overlay.style.display = "none";
});

