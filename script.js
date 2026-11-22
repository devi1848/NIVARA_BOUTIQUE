

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("active");
});


/* ADD TO BAG */

let cartCount = 0;

const cartDisplay = document.getElementById("cartCount");
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        cartCount++;
        cartDisplay.textContent = cartCount;
        button.textContent = "ADDED TO BAG";
    });
});
