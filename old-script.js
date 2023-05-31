// Initialize cart object
const cart = [];

// Find all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to handle adding a product to the cart
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-product-id');
    const input = document.getElementById(`nb${productId}`);
    const quantity = parseInt(input.value, 10);

    // Create product object
    const product = {
        id: productId,
        quantity: quantity
    };

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push(product);
    }

    // Calculate and display the total quantity and price
    const totalQuantity = calculateTotalQuantity();
    const totalPrice = calculateTotalPrice();
    console.log(`Total quantity: ${totalQuantity}`);
    console.log(`Total price: $${totalPrice}`);
}

// Function to calculate the total quantity of products in the cart
function calculateTotalQuantity() {
    let totalQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
        totalQuantity += cart[i].quantity;
    }
    return totalQuantity;
}

// Function to calculate the total price of the products in the cart
function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const productId = cart[i].id;
        const input = document.getElementById(`nb${productId}`);
        // console.log(input.previousElementSibling)
        const price = parseInt(input.previousElementSibling.textContent, 10);
        totalPrice += price * cart[i].quantity;
    }
    return totalPrice;
    
}
