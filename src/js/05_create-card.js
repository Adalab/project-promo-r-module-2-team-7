"use strict";

//section headers
const designHead = document.querySelector('.js-design-head');
const designBigBox = document.querySelector('.js-design-big-box');
const fillHead = document.querySelector('.js-fill-head');
const fillBigBox = document.querySelector('.js-fill-big-box');
const shareHead = document.querySelector('.js-share-head');
const shareBigBox = document.querySelector('.js-share-big-box');
//arrows
const designArrowUp = document.querySelector('.js-design-arrow-up');
const designArrowDown = document.querySelector('.js-design-arrow-down');
const fillArrowUp = document.querySelector('.js-fill-arrow-up');
const fillArrowDown = document.querySelector('.js-fill-arrow-down');
const shareArrowUp = document.querySelector('.js-share-arrow-up');
const shareArrowDown = document.querySelector('.js-share-arrow-down');
 //all section headers
const allHead = [designHead, fillHead, shareHead];

//functions
function reviewClickPlace(actualClickPlace) {
    switch (actualClickPlace) {
    case fillHead:
        fillBigBox.classList.remove('collapsed');
        fillArrowUp.classList.add('collapsed');
        fillArrowDown.classList.remove('collapsed');
        break;
    case shareHead:
        shareBigBox.classList.remove('collapsed');
        shareArrowUp.classList.add('collapsed');
        shareArrowDown.classList.remove('collapsed');
        break;
    case designHead: //to avoid possible error if something changes
        designBigBox.classList.remove('collapsed');
        designArrowUp.classList.add('collapsed');
        designArrowDown.classList.remove('collapsed');
    }
}

function addClass() {
    //Boxes
    designBigBox.classList.add('collapsed');
    fillBigBox.classList.add('collapsed');
    shareBigBox.classList.add('collapsed');
    // arrows
    designArrowUp.classList.remove('collapsed');
    designArrowDown.classList.add('collapsed');
    fillArrowUp.classList.remove('collapsed');
    fillArrowDown.classList.add('collapsed');
    shareArrowUp.classList.remove('collapsed');
    shareArrowDown.classList.add('collapsed');
}

function handleClick(event) {
    event.preventDefault();
    addClass();
    reviewClickPlace(event.currentTarget); //because we have here the listener
}

for (let selector of allHead) {
    selector.addEventListener('click', handleClick);
}
