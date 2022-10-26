'use strict';

const resetBtn = document.querySelector('.js-reset-btn');

const previewArticleTitle = document.querySelector('.js-article-title');
const previewArticleSubtitle = document.querySelector('.js-article-subtitle');
//const previewArticlePhoto = document.querySelector('.js-article-photo');
const previewArticlePhone = document.querySelector('.js-article-link-phone');
const previewArticleMail = document.querySelector('.js-article-link-mail');
const previewArticleLinkedin = document.querySelector('.js-article-link-linkedin');
const previewArticleGitHub = document.querySelector('.js-article-link-github');
const nameInput = document.querySelector('.js-input-name');
const jobInput = document.querySelector('.js-input-job');
const emailInput = document.querySelector('.js-input-email');
const phoneInput = document.querySelector('.js-input-phone');
const linkedinInput = document.querySelector('.js-input-linkedin');
const githubInput = document.querySelector('.js-input-github');

resetBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    nameInput.value = '';
    jobInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    linkedinInput.value = '';
    githubInput.value = ``;
    previewArticleTitle.innerHTML = 'Nombre Apellido';
    previewArticleSubtitle.innerHTML = 'Front-end developer';
    //previewArticlePhoto.background = '../images/profile-picture.jpg';
    previewArticlePhone.href = '#';
    previewArticleMail.href = '#';
    previewArticleLinkedin.href = '#';
    previewArticleGitHub.href = '#';
});






/*

// Create variable for reset button
const resetBtn = document.querySelector('.js-reset-btn');


//Create variables with form inputs


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