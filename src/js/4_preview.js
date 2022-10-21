'use strict';

// Create variable for article and radio button
const previewArticleElement = document.querySelector('.article');
const radioButton = document.querySelector('.design__palette__box--selector');

//Even listener for color palette changes in article

radioButton.addEventListener('click',()=>{
    if(radioButton.value = 1){
        previewArticleElement.classList.add('paletteOne'); 
        previewArticleElement.classList.remove('paletteTwo'); 
        previewArticleElement.classList.remove('paletteThree'); 
    }
    if(radioButton.value = 2){
        previewArticleElement.classList.add('paletteTwo');
        previewArticleElement.classList.remove('paletteOne'); 
        previewArticleElement.classList.remove('paletteThree'); 
    }
    if(radioButton.value = 3){
        previewArticleElement.classList.add('paletteThree');
        previewArticleElement.classList.remove('paletteOne'); 
        previewArticleElement.classList.remove('paletteTwo'); 
    }
});

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
const previewArticleTitle = document.querySelector('.article__header--title');
const previewArticleSubtitle = document.querySelector('.article__header--subtitle');
const previewArticlePhoto = document.querySelector('.article__photo');
const previewArticleLinks = document.querySelector('.article__nav--link');


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
