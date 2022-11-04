'use strict';

/*//Create variable for article
const previewArticleElement = document.querySelector('.js-article');

//Create variables for each palette radio input
const paletteOne =  document.querySelector('.js-palette-one');
const paletteTwo =  document.querySelector('.js-palette-two');
const paletteThree =  document.querySelector('.js-palette-three');*/

function checkPalette(event){
    previewArticleElement.classList.remove('paletteTwo'); 
    previewArticleElement.classList.remove('paletteThree'); 
    previewArticleElement.classList.remove('paletteOne');
    previewArticleElement.classList.add(event.currentTarget.value);
}

paletteOne.addEventListener('click', checkPalette);
paletteTwo.addEventListener('click', checkPalette);
paletteThree.addEventListener('click', checkPalette);