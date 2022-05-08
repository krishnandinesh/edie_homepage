const toggle = document.getElementsByClassName('toggle-btn')[0];
const navbar = document.getElementsByClassName('nav-items')[0];
const body = document.getElementById('scroll');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active')
    body.classList.toggle('scroll')
    
})