let selectedPackage = null;
let quantity = 1;
const currencyOptions = document.querySelectorAll('.currency-option');
const amountInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const addToCartBtn = document.getElementById('add-to-cart');
const whatsappBtn = document.getElementById('whatsapp-btn');
const totalPriceDisplay = document.getElementById('total-price');
const resetBtn = document.querySelector('.reset-btn');

function updatePrice() {
    if (selectedPackage) {
        const totalPrice = (selectedPackage.price * quantity).toFixed(2);
        totalPriceDisplay.textContent = `$${totalPrice}`;
    }
}

currencyOptions.forEach(option => {
    option.addEventListener('click', () => {
        currencyOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedPackage = {
            name: option.textContent,
            price: parseFloat(option.dataset.price)
        };
        updatePrice();
    });
});

decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        amountInput.value = quantity;
        updatePrice();
    }
});

increaseBtn.addEventListener('click', () => {
    quantity++;
    amountInput.value = quantity;
    updatePrice();
});

addToCartBtn.addEventListener('click', () => {
    if (selectedPackage) {
        alert(`Añadido al carrito: ${quantity} ${selectedPackage.name}`);
    } else {
        alert('Por favor, selecciona un paquete primero');
    }
});

whatsappBtn.addEventListener('click', () => {
    if (selectedPackage) {
        const message = `Hola, me interesa comprar ${quantity} ${selectedPackage.name} por $${(selectedPackage.price * quantity).toFixed(2)}`;
        window.open(`https://wa.me/573136272407?text=${encodeURIComponent(message)}`, '_blank');
    } else {
        alert('Por favor, selecciona un paquete primero');
    }
});

resetBtn.addEventListener('click', () => {
    selectedPackage = null;
    quantity = 1;
    amountInput.value = quantity;
    currencyOptions.forEach(opt => opt.classList.remove('selected'));
    totalPriceDisplay.textContent = '$1,25';
});