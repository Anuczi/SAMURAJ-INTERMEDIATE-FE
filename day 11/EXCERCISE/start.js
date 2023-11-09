//1. pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

//1b - okreslanie potrzebnych danych

let textSize = 20;
text.style.fontSize = textSize + 'px';
text.style.color
 = '#aaa';
 text.style.backgroundClip = '#ddd'


//3. Okreslenie akcji - napisanie funkcji 

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + 'px'
}

function textDecrease(){
    textSize--;
    text.style.fontSize = textSize + 'px'
}


//2. Ustawienie nasluchiwania na przyciskach klikniecie

btnIncrease.addEventListener('click', textIncrease);

btnDecrease.addEventListener('click', textDecrease);
