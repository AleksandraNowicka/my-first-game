const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
  this.classList.add('flip');

if (!hasFlippedCard) {
    //pierwsze klikniecie
    hasFlippedCard = true;
    firstCard = this;
} else {
    //drugie klikniecie
    hasFlippedCard = false;
    secondCard = this;

    //czy odkryte?
    //console.log(firstCard.dataset.framework);
    //console.log(secondCard.dataset.framework);

 if (firstCard.dataset.framework === 
    secondCard.dataset.framework)  {
        //trafiony
       firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click', flipCard);
    } else {
        //nie trafiony
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }
 
}

}



cards.forEach(card => card.addEventListener('click', flipCard));