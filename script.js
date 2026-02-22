


let cartCount = 0;


const cartCounter = document.getElementById("cartCounter");


const buttons = document.querySelectorAll(".add-to-cart");


buttons.forEach(button => {
    button.addEventListener("click", () => {
     
        cartCount++;

    
        cartCounter.textContent = cartCount;

    
        alert("Added to Cart!");
    });
});