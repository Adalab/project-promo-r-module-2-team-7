'use strict';

const createButton = document.querySelector('.js-create-button');
const shareResultBox = document.querySelector('.js-share-result-box');


createButton.addEventListener('click', (event) => {
    event.preventDefault();
    createButton.classList.add('createbutton-of');
    createButton.classList.remove('createbutton-on');
    shareResultBox.classList.remove('collapsed');
});