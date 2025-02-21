const { navbarNav } = require("./script");

// Ketika Menu Di Klick
document.querySelector("menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
