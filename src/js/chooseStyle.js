document.addEventListener("DOMContentLoaded", () => {
    const classicBtn = document.querySelector(".classic-btn");
    const unchartedBtn = document.querySelector(".uncharted-btn");

    unchartedBtn.addEventListener("click", () => {
        window.location.href = "./unchartedTheme.html";
    });

    classicBtn.addEventListener("click", () => {
        window.location.href = "./classicTheme.html";
    });    
});

// Cambiar fondo según el botón en el que se sitúe
const page = document.querySelector('.index-page');
const classicBtn = document.querySelector('.classic-btn');
const unchartedBtn = document.querySelector('.uncharted-btn');

classicBtn.addEventListener('mouseenter', () => {
    page.style.background = "url('./src/assets/images/wallpaperClase.jpg') no-repeat center";
    page.style.backgroundSize = "cover";
});

unchartedBtn.addEventListener('mouseenter', () => {
    page.style.background = "url('./src/assets/images/wallpaperUncharted.jpg') no-repeat center";
    page.style.backgroundSize = "cover";
});

[classicBtn, unchartedBtn].forEach(btn => {
    btn.addEventListener('mouseleave', () => {
        page.style.background = "#767676";
    });
});
