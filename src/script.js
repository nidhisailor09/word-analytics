const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const wordsNumberEl = document.querySelector('.stat__number--words');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');


const inputHandler = () => {
    //determine new numbers
    let numberOfWords = textareaEl.value.split(' ').length;
    if (textareaEl.value.length ===0 ){
        numberOfWords = 0;
    }

    const numberOfCharacters = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;

    // add visual indicator for exceed limit
    if (twitterCharactersLeft < 0 ){
        twitterNumberEl.classList.add('stat__number--limit');
    }else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if (facebookCharactersLeft < 0 ){
        facebookNumberEl.classList.add('stat__number--limit');
    }else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }


    //set new numbers
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    wordsNumberEl.textContent = numberOfWords; 
}


textareaEl.addEventListener('input', inputHandler);