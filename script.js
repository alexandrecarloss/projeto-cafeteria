const btnMenu = document.getElementById("btn-menu");
const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    btnMenu.src = "https://img.icons8.com/ios/30/ffffff/cancel.png";
  } else {
    btnMenu.src = "https://img.icons8.com/ios/30/ffffff/menu--v1.png";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      btnMenu.src = "https://img.icons8.com/ios/30/ffffff/menu--v1.png";
    }
  });
});