 import {shuffle} from './util.js';

const items = ['item1', 'item2', 'item3', 'item4','item5', 'item6','item7','item8'];

const gameContainer = document.getElementById('gameContainer');

const shuffledItems = shuffle([...items, ...items]);

shuffledItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('card'); // added a class for css named card 
    card.dataset.item = item;
    card.dataset.index = index;
    card.textContent = '?';
    card.addEventListener('click', handleCardClick);
    gameContainer.appendChild(card);
});

let flippedCards = [];

function handleCardClick(event) {
    const card = event.target;
    if(flippedCards.length <2 && !flippedCards.includes(card)) {
        card.textContent = card.dataset.item;
        flippedCards.push(card);
        if(flippedCards.length == 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const[card1 , card2] = flippedCards;
    if(card1.dataset.item === card2.dataset.item) {
        flippedCards = [];
        setTimeout(()=> {
            card1.style.visiblity = 'hidden';
            card2.style.visiblity = 'hidden';
        },1000);
    } else {
        setTimeout(()=> {
            card1.textContent = '?';
            card2.textContent = '?';
            flippedCards = [];
        },1000);
    }

}
