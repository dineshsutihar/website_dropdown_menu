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


// Select all parent li elements
let parentItems = document.querySelectorAll('.nav-content > ul > li');


// Add event listener to each parent li
parentItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag

        // Select the sub-dropdown of the clicked li
        let subDropdown = this.querySelector('.sub-dropdown');
        let arrowUp = document.querySelector('.arrow-up');
        let arrowDown = document.querySelector('.arrow-down');
        console.log(subDropdown.style.display);
        console.log(subDropdown.style.display);
        


        // Toggle the display of the sub-dropdown
        if (subDropdown.style.display === 'none' || subDropdown.style.display === '') {
            subDropdown.style.display = 'block';
            this.querySelector('.arrow-down').style.display = 'none';
            this.querySelector('.arrow-up').style.display = 'inline';
        } else {
            subDropdown.style.display = 'none';
            this.querySelector('.arrow-down').style.display = 'inline';
            this.querySelector('.arrow-up').style.display = 'none';
        }
    });
});
