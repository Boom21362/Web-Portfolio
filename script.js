let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

var typed = new Typed('.multiple-text', {
      strings: ['Network Engineer','Network Technician','Network Analyst','DevSecOps'],
      typeSpeed: 50,
      backSpeed: 80,
      backDely: 1200,
      loop:true
    });