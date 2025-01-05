var input = document.querySelector('.search-car');
var nissan = document.querySelector('.skyline');
var challenger = document.querySelector('.challenger');
var toyota = document.querySelector('.toyota');
var rover = document.querySelector('.rover');
var gridContainer = document.querySelector('.grid-container');

var addToCart = document.getElementsByClassName('add-to-cart');

for (i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", function () {
        updateCart();
    })
}


var cartCountTag = document.querySelector('.cart-counter');
var cartCounter = 0;
function updateCart() {
    cartCounter++;
    cartCountTag.innerHTML = `(${cartCounter})`;
}

input.addEventListener("input", function (event) {
    const inputValue = event.target.value.toLowerCase();
    if (inputValue === "nissan" || inputValue === "skyline") {
        nissan.style.display = "block";
        challenger.style.display = "none";
        toyota.style.display = "none";
        rover.style.display = "none";
        gridContainer.style.display = "flex";
    }
    else if (inputValue === "challenger") {
        nissan.style.display = "none";
        challenger.style.display = "block";
        toyota.style.display = "none";
        rover.style.display = "none";
        gridContainer.style.display = "flex";
    }
    else if (inputValue === "toyota") {
        nissan.style.display = "none";
        challenger.style.display = "none";
        toyota.style.display = "block";
        rover.style.display = "none";
        gridContainer.style.display = "flex";
    }
    else if (inputValue === "rover") {
        nissan.style.display = "none";
        challenger.style.display = "none";
        toyota.style.display = "none";
        rover.style.display = "block";
        gridContainer.style.display = "flex";
    }
    else if (inputValue === "") {
        nissan.style.display = "block";
        challenger.style.display = "block";
        toyota.style.display = "block";
        rover.style.display = "block";
        gridContainer.style.display = "grid";
    }
    else {
        nissan.style.display = "block";
        challenger.style.display = "block";
        toyota.style.display = "block";
        rover.style.display = "block";
        gridContainer.style.display = "grid";
    }
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

