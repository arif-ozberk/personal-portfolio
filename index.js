const hamburgerBtn = document.querySelector(".hamburger-button");
const navLinks = document.querySelector(".navbar-links");
const closeBtn = document.querySelector(".close-button");

hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.add("navbar-links-active");
})

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("navbar-links-active")
})