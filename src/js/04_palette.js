'use strict';

//Array with all inputs
const inputsPalette = document.querySelectorAll('.design__palette__box--selector');


//Function to add class depending on the checked input (currentTarget). Name value attribute for each input element in the HTML with the CSS class responding to each palette
const checkPalette = (event)=>{
    previewArticleElement.classList.remove('paletteOne'); 
    previewArticleElement.classList.remove('paletteTwo'); 
    previewArticleElement.classList.remove('paletteThree');
    previewArticleElement.classList.add(event.currentTarget.value);
}

//For... of to add an event listener in each input
for (input of inputsPalette){
    input.addEventListener('click', checkPalette);
}

