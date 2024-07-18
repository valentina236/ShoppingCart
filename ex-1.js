let sneakers = [
    { name: "Nike", price: 29.99, quantity: 0 },
    { name: "Converse Monox", price: 45.00, quantity: 0 },
    { name: "Converse Simpsons", price: 24.99, quantity: 0 }
];

let totalItems = 0;
let totalUnits = 0;
let totalPrice = 0;

function addToBasket(index) {
    let quantityInput = document.querySelectorAll('input[type="number"]')[index];
    let quantity = parseInt(quantityInput.value);
    
    if (quantity > 0) 
    {
        sneakers[index].quantity += quantity;
        totalUnits += quantity;
        totalPrice += sneakers[index].price * quantity;
        
        if (sneakers[index].quantity === quantity) totalItems++;
        
        document.getElementById("totalItems").textContent = totalItems;
        document.getElementById("totalUnits").textContent = totalUnits;
        document.getElementById("totalPrice").textContent = `$${totalPrice.toFixed(2)}`;
    }
}

let addToBasketButtons = document.querySelectorAll('.button');

addToBasketButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToBasket(index);
    });
});

document.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        this.textContent = this.classList.contains('active') ? '★' : '☆';
    });
});