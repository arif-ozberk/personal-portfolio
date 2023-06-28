const hamburgerBtn = document.querySelector(".hamburger-button");
const navLinks = document.querySelector(".navbar-links");
const closeBtn = document.querySelector(".close-button");
const eachNavLink = document.querySelectorAll(".navbar-links li a");


hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.add("navbar-links-active");
})

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("navbar-links-active")
})


eachNavLink.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("navbar-links-active");
    })
})