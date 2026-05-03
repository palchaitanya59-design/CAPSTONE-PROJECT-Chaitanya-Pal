// CART SYSTEM
let cartCount = 0;
const cartDisplay = document.querySelector(".cart-count");
const buttons = document.querySelectorAll(".add-to-cart-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
        alert("Item added to cart!");
    });
});

// SEARCH FUNCTION
const searchInput = document.querySelector("input[type='search']");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector("h4").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// FLASH SALE TIMER
let time = 2 * 60 * 60; // 2 hours in seconds
const timerDisplay = document.querySelector(".timer");

function updateTimer() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    timerDisplay.textContent =
        `${hours.toString().padStart(2, "0")} : 
         ${minutes.toString().padStart(2, "0")} : 
         ${seconds.toString().padStart(2, "0")}`;

    if (time > 0) {
        time--;
    }
}

setInterval(updateTimer, 1000);