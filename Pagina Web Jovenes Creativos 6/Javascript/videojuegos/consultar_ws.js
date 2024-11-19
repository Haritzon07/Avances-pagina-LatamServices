document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '573136272407'; // Phone number without the '+' symbol

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const game = this.getAttribute('data-game');
            const message = `Hola, estoy interesado en comprar ${game}. ¿Me pueden dar más información sobre los precios y el proceso de compra?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});