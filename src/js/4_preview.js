'use strict';

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

//Test adding classes to HTML element
/*const radioInput = document.querySelector('.design__palette__box');
const paletteOne =  document.querySelector('.js-palette-one');
const paletteTwo =  document.querySelector('.js-palette-two');
const paletteThree =  document.querySelector('.js-palette-three');*/
/*
radioInput.addEventListener('click',(event)=>{
    console.log('event.target.tagName');
    if(radioInput.classList.contains('js-palette-one') ){
        console.log('paletteone');
        previewArticleElement.classList.remove('paletteTwo'); 
        previewArticleElement.classList.remove('paletteThree'); 
        previewArticleElement.classList.add('paletteOne');    
    }
    else if(radioInput.classList.contains('js-palette-two') ){
        console.log('palettetwo');
        previewArticleElement.classList.remove('paletteOne'); 
        previewArticleElement.classList.remove('paletteThree'); 
        previewArticleElement.classList.add('paletteTwo');
    }
    else{
        console.log('palettethree');
        previewArticleElement.classList.remove('paletteOne'); 
        previewArticleElement.classList.remove('paletteTwo'); 
        previewArticleElement.classList.add('paletteThree');
    }
});*/

/*
// Create variable for reset button
const resetBtn = document.querySelector('.js-reset-btn');

//Create variables with form inputs
const nameInput = document.querySelector('.js-name-input');
const jobInput = document.querySelector('.js-job-input');
const imageInput = document.querySelector('.js-image-input');
const emailInput = document.querySelector('.js-email-input');
const phoneInput = document.querySelector('.js-phone-input');
const linkedinInput = document.querySelector('.js-linkedin-input');
const githubInput = document.querySelector('.js-github-input');

//Create variables with article elements
const previewArticleTitle = document.querySelector('.js-article-title');
const previewArticleSubtitle = document.querySelector('.js-article-subtitle');
const previewArticlePhoto = document.querySelector('.js-article-photo');
const previewArticleLinks = document.querySelector('.js-article-link');


//Even listener for reset button, empty all inputs
resetBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    nameInput.value = '';
    jobInput.value = '';
    imageInput.src = '';
    emailInput.value = '';
    phoneInput.value = '';
    linkedinInput.href = '';
    githubInput.href = ``;
    previewArticleTitle.innerHTML = 'Name Surname';
    previewArticleSubtitle.innerHTML = 'Profession';
    previewArticlePhoto.background = '../images/profile-picture.jpg';
    previewArticleLinks.href = '#';

});
*/
