const btnMenu = document.getElementById("btn-menu");
const nav = document.querySelector(".navbar");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")){
        btnMenu.src = "https://img.icons8.com/ios/30/ffffff/cancel.png";
    } else {
        btnMenu.src = "https://img.icons8.com/ios/30/ffffff/menu--v1.png";
    }
})