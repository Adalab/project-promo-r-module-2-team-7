'use strict';

function checkPalette(event){
    previewArticleElement.classList.remove('paletteOne');
    previewArticleElement.classList.remove('paletteTwo'); 
    previewArticleElement.classList.remove('paletteThree'); 
    previewArticleElement.classList.add(event.currentTarget.value);
}

paletteOne.addEventListener('click', checkPalette);
paletteTwo.addEventListener('click', checkPalette);
paletteThree.addEventListener('click', checkPalette);
