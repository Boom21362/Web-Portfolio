const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Tailwind classes of the mobile dropdown menu
const mobileMenuClasses = [
  "absolute",
  "top-[70px]",
  "left-0",
  "w-full",
  "bg-[#111844]",
  "flex-col",
  "items-start",
  "p-6",
  "gap-6",
  "shadow-lg",
  "border-t",
  "border-white/10",
  "transition-all", 
  "duration-300", 
  "ease-out", 
  "hover:scale-105", 
  "hover:text-amber-300"
];

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");

  navbar.classList.toggle("hidden");
  navbar.classList.toggle("flex");

  mobileMenuClasses.forEach((cls) => navbar.classList.toggle(cls));
};


window.onscroll = () => {
  menuIcon.classList.remove("bx-x");

  navbar.classList.add("hidden");
  navbar.classList.remove("flex");

  mobileMenuClasses.forEach((cls) => navbar.classList.remove(cls));
};

//Type.js config
var typed = new Typed(".multiple-text", {
  strings: [
    "Network Engineer",
    "Network Technician",
    "Network Analyst",
    "DevSecOps",
  ],
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
