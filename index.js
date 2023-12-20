const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const plus = document.querySelector(".increment");
const minus = document.querySelector(".decrement");
const quantity = document.querySelector(".quantity");
const emptyCart = document.querySelector(".empty-cart");
const filledCart = document.querySelector(".filled-cart");
const finalPrice = document.querySelector(".final-price");
const qty = document.querySelector(".qty");
const cart = document.querySelector(".cart");

let sliderIndex = 1;
let ammount = 0;

// function for slideshow
slideShow(sliderIndex);

function plusSlider(n) {
    slideShow(sliderIndex += n);
}
function slideShow(n) {
    let i;
    let slider = document.getElementsByClassName("slider");
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    if (n > slider.length) { sliderIndex = 1 }
    if (n < 1) { sliderIndex = slider.length }

    slider[sliderIndex - 1].style.display = "block";
}

// function for sidebar
function toggleHidden() {
    document.querySelector(".sidebar").classList.toggle("hidden-small");
}

// function for cart and ammount
function cartDisplay() {
    cart.classList.toggle("hidden");
}
function handlePlus() {
    ammount++;
    quantity.innerText = ammount;
}
function handleMinus() {
    if (ammount > 0) {
        ammount--;
    }

    quantity.innerText = ammount;
}
function addItem() {
    if (ammount > 0) {
        const total = 125.00 * ammount;
        emptyCart.classList.add("hidden")
        filledCart.classList.remove("hidden")
        qty.innerText = ammount;
        finalPrice.innerText = total;
    }
}
function removeItem() {
    emptyCart.classList.remove("hidden");
    filledCart.classList.add("hidden");
    ammount = 0;
}

openButton.addEventListener('click', toggleHidden);
closeButton.addEventListener('click', toggleHidden);
plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);

