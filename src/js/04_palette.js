'use strict';

//Test adding classes to HTML element

const previewArticleElement = document.querySelector('.js-article');

const paletteOne =  document.querySelector('.js-palette-one');
const paletteTwo =  document.querySelector('.js-palette-two');
const paletteThree =  document.querySelector('.js-palette-three');

paletteOne.addEventListener('click',()=>{
    previewArticleElement.classList.remove('paletteTwo'); 
    previewArticleElement.classList.remove('paletteThree'); 
    previewArticleElement.classList.add('paletteOne');    
});

paletteTwo.addEventListener('click',()=>{
    previewArticleElement.classList.remove('paletteOne'); 
    previewArticleElement.classList.remove('paletteThree'); 
    previewArticleElement.classList.add('paletteTwo');
});

paletteThree.addEventListener('click',()=>{
    previewArticleElement.classList.remove('paletteOne'); 
    previewArticleElement.classList.remove('paletteTwo'); 
    previewArticleElement.classList.add('paletteThree');
});

/*OTRA FORMA DE HACERLO:
// Create variable for article and radio button
const previewArticleElement = document.querySelector('.js-article');
const radioInput =  document.querySelector('.design__palette');

//Even listener for color palette changes in article

radioInput.addEventListener('click',(event)=>{
    console.log(event.target.tagName);
    if(event.target.tagName === 'INPUT' && event.target.getAttribute('type') === 'radio' && event.target.value === '1' ){
        console.log('paletteone');
        previewArticleElement.classList.remove('paletteTwo'); 
        previewArticleElement.classList.remove('paletteThree'); 
        previewArticleElement.classList.add('paletteOne');    
    }
    if (event.target.tagName === 'INPUT' && event.target.getAttribute('type') === 'radio' && event.target.value === '2' ){
        console.log('palettetwo');
        previewArticleElement.classList.remove('paletteOne'); 
        previewArticleElement.classList.remove('paletteThree'); 
        previewArticleElement.classList.add('paletteTwo');
    }
    if(event.target.tagName === 'INPUT' && event.target.getAttribute('type') === 'radio' && event.target.value === '3' ){
        console.log('palettethree');
        previewArticleElement.classList.remove('paletteOne'); 
        previewArticleElement.classList.remove('paletteTwo'); 
        previewArticleElement.classList.add('paletteThree');
    }
});
*/