// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Menu Di Klick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

/* Klick di Luar sidebar untuk Menghilangkan Nav */
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
