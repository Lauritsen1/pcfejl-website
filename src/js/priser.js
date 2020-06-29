let priceCards = document.querySelectorAll('.price-card');
let priceCardInner = document.querySelectorAll('.price-card__inner');


priceCards.forEach((card, index) => {

    card.addEventListener('click', () => {

        priceCardInner[index].classList.toggle('price-card--active');
    });

});
