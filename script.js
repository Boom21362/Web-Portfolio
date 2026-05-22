const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Define all the Tailwind classes needed to style the mobile dropdown menu
const mobileMenuClasses = [
    'absolute', 'top-[70px]', 'left-0', 'w-full', 
    'bg-[#007f73]', 'flex-col', 'items-start', 
    'p-6', 'gap-6', 'shadow-lg', 'border-t', 'border-white/10'
];

menuIcon.onclick = () => {
    // 1. Toggle the hamburger icon to an "X" icon close state
    menuIcon.classList.toggle('bx-x');

    // 2. Toggle the visibility utilities for mobile screen widths
    navbar.classList.toggle('hidden');
    navbar.classList.toggle('flex');

    // 3. Inject/Remove the mobile dropdown layout styles dynamically
    mobileMenuClasses.forEach(cls => navbar.classList.toggle(cls));
};

// Clean closure function when a user scrolls the webpage layout
window.onscroll = () => {
    // Force reset the menu icon back to standard hamburger state
    menuIcon.classList.remove('bx-x');

    // Force hide the navbar on mobile, restore to default hidden class status
    navbar.classList.add('hidden');
    navbar.classList.remove('flex');

    // Force strip all absolute mobile structural classes out
    mobileMenuClasses.forEach(cls => navbar.classList.remove(cls));
};

// Typed.js Initialization
var typed = new Typed('.multiple-text', {
    strings: ['Network Engineer', 'Network Technician', 'Network Analyst', 'DevSecOps'],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});